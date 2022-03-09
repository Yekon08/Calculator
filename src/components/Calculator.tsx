import React, { useReducer } from "react";

const digit = [
  "AC",
  "DEL",
  "÷",
  "1",
  "2",
  "3",
  "*",
  "4",
  "5",
  "6",
  "+",
  "7",
  "8",
  "9",
  "-",
  ".",
  "0",
  "=",
];

interface State {
  previous: string,
  current: string,
  operation: string,
}

interface Action {
  type: string,
  payload: string;
}

const reducer = (state: State, action: Action) => {
  switch(action.type) {
    case: "add-digit":
     return {...state, current: `${state.current || ""}${action.payload}`}
    default: throw new Error();

  }
};

const Calculator = () => {
const initialState: State = {
  previous: "",
  current: "", 
  operation: "",
}``

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="digitContainer">
      <div className="outputContainer spanAll">
        <div className="previous">
          {state.previous} {state.operation}
        </div>
        <div className="current">{state.current}</div>
      </div>
      {digit.map((digit) => (
        <button 
        className={`${(digit === "=" || digit === "AC") && "spanTwo"}`}
        onClick={() => dispatch({type: "add-digit", payload: digit})}
        >
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
