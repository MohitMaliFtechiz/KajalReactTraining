import { useState, useEffect, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    clearInterval(intervalRefs.current);
    setCount(0);
  };

  const intervalRefs = useRef();

  const startHandler = () => {
    intervalRefs.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">Stop Watch</div>
          <div className="card-body text-center">
            <h5 className="card-title text-center my-4">{formatTime(count)}</h5>
            <hr />
            <button
              className="btn btn-primary mx-2"
              onClick={() => startHandler()}
            >
              Start
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => clearInterval(intervalRefs.current)}
            >
              Pause
            </button>
            <button className="btn btn-primary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div>
          <img src="./watch.jpeg" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
