import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const add = () => {
    setResult(result + Number(input));
  };

  const subtract = () => {
    setResult(result - Number(input));
  };

  const multiply = () => {
    setResult(result * Number(input));
  };

  const divide = () => {
    if (Number(input) !== 0) {
      setResult(result / Number(input));
    } else {
      alert("Can't divide by zero");
    }
  };

  const resetInput = () => {
    setInput("");
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <h2>Result: {result}</h2>
      <br />
      <br />
      <input
        className="calculator-input"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"/>
      <div calculator-buttons>
      <button className="button-add" onClick={add}>Add</button>
      <button className="button-subtract" onClick={subtract}>Subtract</button>
      <button className="button-multiply" onClick={multiply}>Multiply</button>
      <button className="button-divide" onClick={divide}>Divide</button>
      <button className="button-reset-input" onClick={resetInput}>Reset Input</button>
      <button className="button-reset-result" onClick={resetResult}>Reset Result</button>
      </div>
    </div>
  );
}

export default Calculator;
