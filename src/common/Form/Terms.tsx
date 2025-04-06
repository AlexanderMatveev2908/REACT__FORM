import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { MainFormType } from "./MainForm";
import { FC, useEffect, useRef, useState } from "react";

type PropsType = {
  register: UseFormRegister<MainFormType>;
  errors: FieldErrors;
  watch: UseFormWatch<MainFormType>;
};

const Terms: FC<PropsType> = ({ register, errors, watch }) => {
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

  return (
    <div className="w-full grid">
      <div className="min-w-full flex items-center gap-10">
        <label
          onMouseDown={() => setHasCLicked(true)}
          ref={labelRef}
          className="flex max-w-fit justify-start relative py-3 cursor-pointer items-center"
        >
          <input
            type="checkbox"
            className="opacity-0"
            {...register("terms", {
              required: "You need to accept terms",
            })}
          />
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
        </label>

        <span
          className="txt__0"
          style={{
            color: "var(--gray__300)",
            borderColor: "var(--gray__200)",
          }}
        >
          You agree to our&nbsp;
          <span
            className="txt__0 border-b-2"
            style={{
              color: "var(--gray__300)",
              borderColor: "var(--gray__200)",
            }}
          >
            privacy policy.
          </span>
        </span>
      </div>

      <span className="text-sm font-bold text-red-600 pt-2">
        {(errors?.terms?.message as string) ?? ""}
      </span>
    </div>
  );
};
export default Terms;
