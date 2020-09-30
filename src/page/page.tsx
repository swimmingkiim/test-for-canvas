import React, { useReducer, useRef } from "react";
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
  const canvas = <Canvas canvasRef={canvasRef} dispatch={dispatch} />;
  return <Template canvas={canvas} />;
};

export default Page;
