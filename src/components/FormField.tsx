/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { FormFieldType } from "../config/field";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { MainFormType } from "../common/Form/MainForm";

type PropsType = {
  el: FormFieldType;
  register: UseFormRegister<MainFormType>;
  errors: FieldErrors;
};

const FormField: FC<PropsType> = ({ el, register, errors }) => {
  return (
    <div className="min-w-full grid">
      <label className="grid gap-1">
        <span
          className="txt__0"
          style={{
            color: "var(--gray__400)",
          }}
        >
          {el.label}
        </span>

        <input
          type={el?.type ?? "text"}
          placeholder={el.place}
          className="min-w-full py-[12px] px-[16px] txt__0 border-2 rounded-[20px] outline-0"
          style={{
            color: "var(--gray__300)",
            borderColor: "var(--gray__200)",
          }}
          {...register(el.field as keyof MainFormType, {
            required: `${el.label} is required`,
            pattern: {
              value: el.reg,
              message: `${el.label} is not valid`,
            },
          })}
        />
      </label>

      <span className="text-sm font-bold text-red-600 pt-2">
        {(errors?.[el.field]?.message as string) ?? ""}
      </span>
    </div>
  );
};
export default FormField;
