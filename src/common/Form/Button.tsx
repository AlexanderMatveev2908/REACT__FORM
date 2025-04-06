import { FC } from "react";

type PropsType = {
  isPending: boolean;
};

const Button: FC<PropsType> = ({ isPending }) => {
  return (
    <div className="w-full flex justify-center mt-[4px] md:mt-[26px]">
      <button
        type="submit"
        className="px-[30px] py-[11px] min-w-full rounded-[20px] app__btn"
      >
        {isPending ? (
          <div className="w-full flex justify-center">
            <div className="w-fit flex items-center gap-5 -ml-5">
              <span className="w-[40px] h-[40px] border-[3px] rounded-full border-l-transparent border-r-transparent mini_spinner border-black"></span>

              <span className="txt__1 border-0 outline-0 text-center">
                Sending...
              </span>
            </div>
          </div>
        ) : (
          <span className="txt__1 border-0 outline-0 text-center">
            Send message
          </span>
        )}
      </button>
    </div>
  );
};
export default Button;
