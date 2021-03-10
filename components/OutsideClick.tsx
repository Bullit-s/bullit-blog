import { FC } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface Props {
  onClick: () => void;
  enable?: boolean;
}

export const OutsideClick: FC<Props> = ({ enable, onClick, children }) => {
  return (
    <>
      {enable ? (
        <OutsideClickHandler onOutsideClick={onClick}>
          {children}
        </OutsideClickHandler>
      ) : (
        children
      )}
    </>
  );
};
