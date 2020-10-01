import React from "react";
import * as S from "./style";

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  onClickFunc?: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  onDragFunc?: (e: React.MouseEvent<HTMLCanvasElement>) => void;
}

const Canvas: React.FC<CanvasProps> = ({
  canvasRef,
  onClickFunc,
  onDragFunc,
}) => {
  return (
    <S.CanvasSelf
      ref={canvasRef}
      width={canvasRef.current?.offsetWidth}
      height={canvasRef.current?.offsetHeight}
      onClick={onClickFunc}
      onDrag={onDragFunc}
    ></S.CanvasSelf>
  );
};

export default Canvas;
