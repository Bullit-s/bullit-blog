import { Wave } from "../../assets/images/Wave";
import { FC, ReactNode } from "react";

export interface ContentLayoutProps {
  home?: boolean;
  contentHeader: ReactNode;
}

export const ContentLayout: FC<ContentLayoutProps> = ({
  home,
  contentHeader,
  children,
}) => {
  return (
    <main>
      <div className={"bg-white dark:bg-coolGray-700"}>
        <div className={"max-w-screen-xl px-2 pt-20 mx-auto dark:text-white"}>
          {contentHeader}
        </div>
        <Wave className={"w-full text-coolGray-700 dark:text-coolGray-800"} />
      </div>
      <div className={"text-white max-w-screen-xl px-2 pt-5 mx-auto"}>
        {children}
      </div>
    </main>
  );
};
