import React, { useReducer } from "react";
import { digit, initialState } from "./utils";
import { reducer } from "./Reducer";

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleData = (expression: string) => {
    const url = `https://api.mathjs.org/v4/?expr=${encodeURIComponent(
      expression
    )}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("test: ", data);
        dispatch({ type: "evaluate", payload: data.toString() });
      });
  };

  const switchButton = (digit: string) => {
    switch (digit) {
      case "=":
        handleData(state.current);
        break;
      case "AC":
        dispatch({ type: "clear" });
        break;
      case "DEL":
        dispatch({ type: "delete" });
        break;
      default:
        dispatch({ type: "add-digit", payload: digit });
    }
  };

  return (
    <div className="digitContainer">
      <div className="outputContainer spanAll">
        <div className="previous">{state.previous}</div>
        <div className="current">{state.current}</div>
      </div>
      {digit.map((digit) => (
        <button
          key={digit}
          className={`
            ${(digit === "=" || digit === "AC") && "spanTwo"}
            ${digit === "=" && "roundedRight"}
            ${digit === "." && "roundedLeft"}
          `}
          onClick={() => switchButton(digit)}
        >
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
