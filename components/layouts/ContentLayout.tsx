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
        <div
          className={
            "max-w-screen-xl px-2 pt-2 mx-auto dark:text-white lg:pt-20 md:px-4"
          }
        >
          {contentHeader}
        </div>
        <Wave className={"w-full text-lightGray-50 dark:text-coolGray-800"} />
      </div>
      <div
        className={"max-w-screen-xl px-2 pt-5 mx-auto dark:text-white md:px-4"}
      >
        {children}
      </div>
    </main>
  );
};
