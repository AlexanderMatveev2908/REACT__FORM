import { FC } from "react";
import { FormFieldType } from "../config/field";

type PropsType = {
  el: FormFieldType;
};

const FormField: FC<PropsType> = ({ el }) => {
  return (
    <div className="w-full grid justify-items-start">
      <label className="grid gap-1">
        <span
          className="txt__2"
          style={{
            color: "var(--gray__400)",
          }}
        >
          {el.label}
        </span>

        <input
          type={el?.type ?? "text"}
          placeholder={el.place}
          className="w-full py-[12px] px-[16px] txt__3 border-2 rounded-[20px] outline-0"
          style={{
            color: "var(--gray__300)",
            borderColor: "var(--gray__200)",
          }}
        />
      </label>
    </div>
  );
};
export default FormField;
