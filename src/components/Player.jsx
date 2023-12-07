import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
  };
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown player"}</h2>
      <p>
        <input
          type="text"
          onChange={handleChange}
          value={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
