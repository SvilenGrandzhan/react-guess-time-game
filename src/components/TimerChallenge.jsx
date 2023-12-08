import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
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
    timer.current = setInterval(() => {
      //prettier-ignore
      setTimeRemaining(previousTimeRemaining => previousTimeRemaining - 10);
    }, 10);
  };

  const handleTimerStop = () => {
    dialog.current.open();
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
