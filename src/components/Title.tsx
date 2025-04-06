import { FC } from "react";

const Title: FC = () => {
  return (
    <div className="grid gap-[25px] items-start h-fit">
      <div className="max-w-full">
        <span
          className="txt__4"
          style={{
            color: "var(--black)",
          }}
        >
          Let’s eat healthy food and
        </span>
        &nbsp;
        <span
          className="txt__4"
          style={{
            color: "var(--yell__1)",
          }}
        >
          stay fit.
        </span>
      </div>

      <span className="txt__3" style={{ color: "var(--gray__300)" }}>
        Send what you eat, and get your fitness plan.
      </span>
    </div>
  );
};
export default Title;
