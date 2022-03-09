import React, { useEffect, useState } from "react";
import Calculator from "./components/Calculator";
import "./main.scss";

const App = () => {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleData = (expression: string) => {
    const url = `http://api.mathjs.org/v4/?expr=${encodeURIComponent(
      expression
    )}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  };

  console.log("expr: ", expression);
  console.log("res: ", result);
  return (
    <div className="container">
      <p>Result: {result}</p>
      <input
        type="text"
        placeholder="Number ..."
        onChange={(e) => setExpression(e.target.value)}
      />
      <button onClick={() => handleData(expression)}>Send</button>
      <Calculator />
    </div>
  );
};

export default App;
