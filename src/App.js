import { useState } from "react";
import "./App.css";

function App() {
  const [string, setString] = useState("");

  const addSymbol = (symbol) => {
    return (ev) => {
      if (string === "ERROR") setString(symbol);
      else setString(`${string}${symbol}`);
    };
  };
  const removeLastSymbol = (ev) => {
    setString(string.substring(0, string.length - 1));
  };
  const removeAllSymbols = (ev) => {
    setString("");
  };

  const showResult = (ev) => {
    try {
      // eslint-disable-next-line no-eval
      let result = eval(string);
      if (result === 0) result = Math.abs(result);
      setString(result + "");
    } catch {
      setString("ERROR");
    }
  };
  return (
    <div className="App">
      <div>
        <div className="display">{string}</div>
        <div className="grid">
          <button onClick={addSymbol(1)}>1</button>
          <button onClick={addSymbol(2)}>2</button>
          <button onClick={addSymbol(3)}>3</button>
          <button onClick={addSymbol("+")}>+</button>
          <button onClick={addSymbol(4)}>4</button>
          <button onClick={addSymbol(5)}>5</button>
          <button onClick={addSymbol(6)}>6</button>
          <button onClick={addSymbol("-")}>-</button>
          <button onClick={addSymbol(7)}>7</button>
          <button onClick={addSymbol(8)}>8</button>
          <button onClick={addSymbol(9)}>9</button>
          <button onClick={addSymbol("*")}>*</button>
          <button onClick={addSymbol(0)}>0</button>
          <button onClick={addSymbol("/")}>/</button>
          <button onClick={addSymbol("(")}>{"("}</button>
          <button onClick={addSymbol(")")}>{")"}</button>
          <button onClick={removeLastSymbol}>c</button>
          <button onClick={removeAllSymbols}>cc</button>
          <button onClick={showResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
