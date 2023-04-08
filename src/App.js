import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from "react";
import * as math from "mathjs";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText(value => text + val);
  };

  const calculateResult = () => {
    setResult(math.evaluate(text));
  }


  const resetInput = () => {
    setText("");
    setResult("");
  }

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleOnClick={addToText} />
          <Button symbol="8" handleOnClick={addToText} />
          <Button symbol="9" handleOnClick={addToText} />
          <Button symbol="/" color='orange' handleOnClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleOnClick={addToText} />
          <Button symbol="5" handleOnClick={addToText} />
          <Button symbol="6" handleOnClick={addToText} />
          <Button symbol="+" color='orange' handleOnClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleOnClick={addToText} />
          <Button symbol="2" handleOnClick={addToText} />
          <Button symbol="3" handleOnClick={addToText} />
          <Button symbol="-" color='orange' handleOnClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleOnClick={addToText} />
          <Button symbol="." handleOnClick={addToText} />
          <Button symbol="=" handleOnClick={calculateResult} />
          <Button symbol="*" color='orange' handleOnClick={addToText} />
        </div>
        <div>
          <Button symbol="clear" color='red' handleOnClick={resetInput} />
        </div>
      </div>
    </div>
  );
};

export default App;
