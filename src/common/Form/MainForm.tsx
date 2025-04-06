import { FC, ReactNode, useState } from "react";
import { fieldsForm } from "../../config/field";
import FormField from "../../components/FormField";
import { useForm } from "react-hook-form";
import Terms from "./Terms";
import Button from "./Button";
import { REG_TXT } from "../../config/reg";

export type MainFormType = {
  firstName: string;
  lastName: string;
  emaiL: string;
  message: string;
  terms: boolean;
};

const MainForm: FC = () => {
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm<MainFormType>({
    mode: "onChange",
  });

  const handleSave = handleSubmit((formData) => {
    setIsPending(true);

    // eslint-disable-next-line
    return new Promise((res, __) => {
      setTimeout(() => {
        console.log(formData);
        setIsPending(false);
        reset();
        alert("Form submitted successfully");

        res(formData);
      }, 2000);
    });
  });

  return (
    <form
      onSubmit={handleSave}
      className="bg-white h-full w-full grid rounded-xl md:p-[30px] justify-items-center gap-x-[20px] gap-y-[24px] pb-[50px] md:pb-[100px]"
    >
      {/* ABSOLUTE NO NEED TO USE AN IIFE, THE ONLY REASON IS FOR EXERCISE PURPOSE */}
      {(() => {
        const content: ReactNode[] = [];

        let i = 0;
        do {
          const curr = fieldsForm[i];

          if (
            curr.field === "firstName" &&
            fieldsForm[i + 1].field === "lastName"
          ) {
            content.push(
              <div className="w-full grid lg:grid-cols-2 gap-y-[24px] gap-x-[20px]">
                {fieldsForm.slice(0, 2).map((el) => (
                  <FormField key={el.id} {...{ el, register, errors }} />
                ))}
              </div>
            );
            i += 2;
          } else {
            content.push(
              <FormField key={curr.id} {...{ el: curr, register, errors }} />
            );
            i++;
          }
        } while (i < fieldsForm.length);

        return content;
      })()}

      <div className="min-w-full grid">
        <label className="grid gap-1">
          <span
            className="txt__0"
            style={{
              color: "var(--gray__400)",
            }}
          >
            Message
          </span>

          <textarea
            className="min-w-full py-[12px] px-[16px] txt__0 border-2 rounded-[20px] outline-0"
            rows={4}
            placeholder="Enter a message..."
            style={{
              color: "var(--gray__300)",
              borderColor: "var(--gray__200)",
            }}
            {...register("message", {
              required: false,
              validate: (val: string) =>
                !!val && !REG_TXT.test(val) ? "Invalid message" : true,
            })}
          />
        </label>

        <span className="text-sm font-bold text-red-600 pt-2">
          {(errors?.message?.message as string) ?? ""}
        </span>
      </div>

      <Terms {...{ register, errors, watch }} />

      <Button {...{ isPending }} />
    </form>
  );
};
export default MainForm;
