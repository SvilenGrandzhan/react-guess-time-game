import { useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const handleTimer = () => {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleTimer}>{!timerStarted ? "Start" : "Stop"} Challenge</button>
      </p>
      <p className={!timerStarted ? undefined : "active"}>{!timerStarted ? "Timer inactive" : "Time is running"} </p>
    </section>
  );
}

export default TimerChallenge;
