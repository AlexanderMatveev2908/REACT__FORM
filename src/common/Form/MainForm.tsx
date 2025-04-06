import { FC } from "react";
import { fieldsForm } from "../../config/field";
import FormField from "../../components/FormField";

const MainForm: FC = () => {
  return (
    <form className="bg-white h-full w-full grid rounded-xl p-[30px]">
      <div className="w-full grid lg:grid-cols-2 gap-y-[24px] gap-x-[20px]">
        {fieldsForm.slice(0, 2).map((el) => (
          <FormField key={el.id} {...{ el }} />
        ))}
      </div>
    </form>
  );
};
export default MainForm;
