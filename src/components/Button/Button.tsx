import React from "react";
import * as S from "./style";

interface ButtonProps {
  displayContent: string | React.FC | React.ReactChild;
  onClickFunc?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ displayContent, onClickFunc }) => {
  return <S.ButtonSelf onClick={onClickFunc}>{displayContent}</S.ButtonSelf>;
};

export default Button;
