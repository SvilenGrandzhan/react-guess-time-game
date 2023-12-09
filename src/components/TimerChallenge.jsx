import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  // 1. Initialize hook
  const timer = useRef();

  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleTimerStart = () => {
    // 2. assign value to ref but using current property
    timer.current = setInterval(() => {
      //prettier-ignore
      setTimeRemaining(previousTimeRemaining => previousTimeRemaining - 10);
    }, 10);
  };

  const handleTimerStop = () => {
    dialog.current.open();
    // 3. changing assigned value of ref. Again using current property
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={!timerIsActive ? handleTimerStart : handleTimerStop}>{!timerIsActive ? "Start" : "Stop"} Challenge</button>
        </p>
        <p className={!timerIsActive ? undefined : "active"}>{!timerIsActive ? "Timer inactive" : "Time is running"} </p>
      </section>
    </>
  );
}

export default TimerChallenge;

// ! In this case because useRef is defined inside of component.
// ! it will different for every component instance`
