import { useState, useRef } from "react";

export default function Player() {
  // 1. declare useRef hook
  const inputPlayerName = useRef();

  const [playerName, setPlayerName] = useState("");

  const handleClick = () => {
    // 3. Use value of connected JSX element adding at the end *.current.value.
    // Note: typeof declared useRef variable is an Object
    setPlayerName(inputPlayerName.current.value);
    inputPlayerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? ""}</h2>
      <p>
        <input
          // 2. connect useRef hook to special "ref" property of JSX element we want to connect
          ref={inputPlayerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

//!Note: useRef hook does NOT trigger re-load of the component
