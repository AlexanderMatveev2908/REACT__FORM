import { img__0 } from "./assets";
import Title from "./components/Title";
import MainForm from "./common/Form/MainForm";

// test

const App = () => {
  return (
    <div
      className="min-w-full grid place-content-center place-items-center min-h-screen"
      style={{
        background: "var(--gray__50)",
      }}
    >
      <div className="grid grid-cols-2 h-full max-w-[1150px] gap-[50px] max-h-[858px] justify-items-center app__container">
        {/* LEFT */}
        <div className="w-full grid justify-items-center max-w-[490px] max-h-[776px] py-10 items-start place-content-start gap-[50px]">
          {/* TITLE */}
          <Title />
          {/* FORM */}
          <MainForm />
        </div>
        {/* RIGHT */}
        <div className="grid place-items-center max-w-full rounded-lg overflow-hidden app__right min-h-[858px] pt-10">
          <img
            src={img__0}
            alt="img__0"
            className="w-full min-w-full min-h-[858px] object-cover "
          />
        </div>
      </div>
    </div>
  );
};
export default App;
