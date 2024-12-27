import React, { useState } from "react";
import "./App.css";
import { Button } from "./Button/Button";
import { Title } from "./Title/Title";

export const numbers = [0, 1, 2, 3, 4, 5];

function App() {
  //max min value
  const [inc, setInc] = useState(0);

  function onClickHandler() {
    if (inc < 5) {
      setInc(inc + 1);
    }
  }
  function onReset() {
    setInc(0);
  }

  return (
    <div className='App'>
      <Title inc={inc} />
      <div className='buttons'>
        <Button
          name='inc'
          onClick={onClickHandler}
          disabled={inc >= numbers.length - 1}
        />
        <Button name='reset' onClick={onReset} disabled={inc === numbers[0]} />
      </div>
    </div>
  );
}

export default App;
