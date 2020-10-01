import React, { useEffect, useReducer, useRef } from "react";
import Template from "./template";
import Canvas from "components/Canvas/Canvas";
import reducer from "./reducer";
import { StateType } from "./reducer";
import Action from "./actions";

const Page = () => {
  const [state, dispatch] = useReducer<React.Reducer<StateType, Action>>(
    reducer,
    []
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    if (canvasRef.current) {
      const { offsetTop, offsetLeft } = canvasRef.current;
      const x = e.pageX - offsetLeft;
      const y = e.pageY - offsetTop;
      try {
        dispatch({ type: "ADD_DOT", coordinate: { x, y } });
      } catch (error) {
        console.log(String(error));
      }
    }
  };
  const canvas = <Canvas canvasRef={canvasRef} onClickFunc={onCanvasClick} />;
  const ctx = canvasRef.current?.getContext("2d");

  useEffect(() => {
    if (Boolean(state.length)) {
      const { x, y } = state[state.length - 1];
      ctx?.beginPath();
      ctx?.arc(x, y, 5, 0, Math.PI * 2, true);
      ctx?.fill();
    }
  }, [state, ctx]);

  return <Template canvas={canvas} />;
};

export default Page;
