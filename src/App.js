import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [randomInput, setRandomInput] = useState("");
  const [second, setSecond] = useState(0);
  const renders = useRef(0);
  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSecond((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (second) {
      renders.current++;
      setSecond(0);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="random">Random Input</label>
        <input type="text" value={randomInput} onChange={handleChange} />
        <p>{renders.current}</p>
        <br />
        <br />
        <p>Seconds: {second}</p>
        <section>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </section>
      </header>
    </div>
  );
}

export default App;
