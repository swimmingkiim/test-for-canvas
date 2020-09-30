type Action =
  | { type: "ADD_DOT"; coordinate: { x: number; y: number } }
  | { type: "REMOVE_RECENT_DOT" };

export default Action;
