import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Wave } from "../../assets/images/Wave";

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
          className={classNames(
            "max-w-screen-xl px-2 pt-2 mx-auto dark:text-white md:px-4",
            {
              "lg:pt-20": home,
            }
          )}
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
