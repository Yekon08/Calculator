import { initialState, Action, State } from "./utils";

export const reducer = (state: State, action: Action): State | any => {
  switch (action.type) {
    case "add-digit":
      if (action.payload === "0" && state.current === "0") return state;
      if (action.payload === "." && state.current.includes(".")) return state;
      return { ...state, current: `${state.current || ""}${action.payload}` };
    case "evaluate":
      return { ...state, current: action.payload };
    case "clear":
      return initialState;
    case "delete":
      if (state.current == null) return state;
      if (state.current.length === 1) {
        return { ...state, current: null };
      }
      return {
        ...state,
        current: state.current.slice(0, -1),
      };
    default:
      console.log("error...");
  }
};
