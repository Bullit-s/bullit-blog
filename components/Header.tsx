import { DarkModeButton } from "./DarkModeButton";
import { Navigation } from "./Navagation";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header>
      <div className="duration-300 border-b dark:bg-coolGray-900">
        <div
          className={
            "flex flex-col flex-wrap p-5 max-w-screen-xl mx-auto md:items-center md:flex-row"
          }
        >
          <Logo />
          <Navigation />
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
};
