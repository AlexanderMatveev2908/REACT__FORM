import { FC, ReactNode } from "react";
import { fieldsForm } from "../../config/field";
import FormField from "../../components/FormField";

const MainForm: FC = () => {
  return (
    <form className="bg-white h-full w-full grid rounded-xl p-[30px] justify-items-center gap-x-[20px] gap-y-[24px]">
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
    </form>
  );
};
export default MainForm;
