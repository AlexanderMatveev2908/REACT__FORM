import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { fieldsForm } from "../../config/field";
import FormField from "../../components/FormField";
import { useForm } from "react-hook-form";

type MainFormType = {
  firstName: string;
  lastName: string;
  emaiL: string;
  message: string;
  terms: boolean;
};

const MainForm: FC = () => {
  // we can use ref that does not cause rerender and are more like react ninja 🥷🏼
  const checkRef = useRef<HTMLSpanElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);
  // i use a state like this cause without it, if we keep some variable like green checked red unchecked and gray neutral , it would be red on mount and it is not the goal, so is useful in my opinion keep a helper in ternary operator
  const [hasClicked, setHasCLicked] = useState<boolean>(false);

  useEffect(() => {
    const listenClick = (e: MouseEvent) => {
      if (!labelRef?.current || !checkRef?.current) return;

      if (labelRef.current.contains(e.target as Node) && hasClicked) {
        checkRef.current?.classList.remove("app__check");

        requestAnimationFrame(() =>
          checkRef.current?.classList.add("app__check")
        );
      }
    };

    document.addEventListener("click", listenClick);

    return () => document.removeEventListener("click", listenClick);
  }, [hasClicked]);

  const { register, watch } = useForm<MainFormType>({
    mode: "onChange",
  });

  return (
    <form className="bg-white h-full w-full grid rounded-xl md:p-[30px] justify-items-center gap-x-[20px] gap-y-[24px] pb-[50px] md:pb-[100px]">
      {/* ABSOLUTE NO NEED TO USE AN IIFE, THE ONLY REASON IS FOR EXERCISE PURPOSE AND I ALSO LIKE THEM */}
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
                  <FormField key={el.id} {...{ el }} />
                ))}
              </div>
            );
            i += 2;
          } else {
            content.push(<FormField key={curr.id} {...{ el: curr }} />);
            i++;
          }
        } while (i < fieldsForm.length);

        return content;
      })()}

      <div className="min-w-full grid">
        <label className="grid gap-1">
          <span
            className="txt__2"
            style={{
              color: "var(--gray__400)",
            }}
          >
            Message
          </span>

          <textarea
            className="min-w-full py-[12px] px-[16px] txt__3 border-2 rounded-[20px] outline-0"
            rows={4}
            placeholder="Enter a message..."
            style={{
              color: "var(--gray__300)",
              borderColor: "var(--gray__200)",
            }}
          />
        </label>
      </div>

      <div className="min-w-full grid">
        <label
          onMouseDown={() => setHasCLicked(true)}
          ref={labelRef}
          className="w-full flex gap-8 max-w-fit justify-start relative py-2 cursor-pointer items-center"
        >
          <input type="checkbox" className="opacity-0" {...register("terms")} />
          <span
            ref={checkRef}
            className="absolute top-1 left-0 border-[2px] rounded-lg w-[30px] h-[30px] cursor-pointer"
            style={{
              color: "var(--gray__300)",
              borderColor: "var(--gray__200)",
            }}
          ></span>
          <span
            className={`absolute delay-75 -top-2 sm:-top-3 left-4 w-3 sm:w-4 h-8 sm:h-10 border-r-4 border-b-4 rotate-45 border-green-600 transition-all duration-300 cursor-pointer ${
              watch("terms") ? "scale-100" : "scale-0"
            }`}
          ></span>

          <span
            className="txt__01"
            style={{
              color: "var(--gray__300)",
              borderColor: "var(--gray__200)",
            }}
          >
            You agree to our privacy policy.
          </span>
        </label>
      </div>

      <div className="w-full flex justify-center mt-[4px] md:mt-[26px]">
        <button className="px-[30px] py-[11px] min-w-full rounded-[20px] app__btn">
          <span className="txt__02 border-0 outline-0 text-center">
            Send message
          </span>
        </button>
      </div>
    </form>
  );
};
export default MainForm;
