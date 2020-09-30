import Action from "./actions";

export type StateType = {
  x: number;
  y: number;
}[];

const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "ADD_DOT":
      return [...state, action.coordinate];
    case "REMOVE_RECENT_DOT":
      const [...newState] = state;
      newState.pop();
      return newState;
  }
};

export default reducer;
