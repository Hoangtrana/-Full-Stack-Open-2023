import { useState } from "react";
import Button from "./Button";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [voteCount, setVoteCount] = useState(
    new Array(anecdotes.length).fill(0)
  );
  console.log(voteCount);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {
    console.log("next anecdote clicked");

    setSelected(getRandomInt(anecdotes.length));
  };

  const votehanleClick = () => {
    const newVotes = [...voteCount];
    newVotes[selected] += 1;
    setVoteCount(newVotes);
  };
  const maxValue = Math.max(...voteCount);
  const maxIndex = voteCount.indexOf(maxValue);
  console.log("MAx index: " + maxIndex);
  return (
    <div>
      <h1>Anadote of the day</h1>
      {anecdotes[selected]}
      <p>has {voteCount[selected]} votes </p>
      <Button handleClick={handleClick} votehanleClick={votehanleClick} />
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIndex]}
    </div>
  );
}

export default App;
