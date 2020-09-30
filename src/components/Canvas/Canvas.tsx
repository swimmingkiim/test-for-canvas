import React from "react";
import * as S from "./style";
import Action from "page/actions";

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  dispatch: React.Dispatch<Action>;
  onClickFunc?: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  onDragFunc?: (e: React.MouseEvent<HTMLCanvasElement>) => void;
}

const Canvas: React.FC<CanvasProps> = ({
  canvasRef,
  dispatch,
  onClickFunc,
  onDragFunc,
}) => {
  return (
    <S.CanvasSelf
      ref={canvasRef}
      onClick={onClickFunc}
      onDrag={onDragFunc}
    ></S.CanvasSelf>
  );
};

export default Canvas;
