import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div className="card m-3 p-2">
      <p className="anecdote">{anecdote}</p>
      <p>
        Has <strong>{votes}</strong> votes
      </p>
    </div>
  );
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const maxVotes = votes.indexOf(Math.max(...votes));

  const handleOnclickVotes = () => {
    const copyVotes = [...votes];
    copyVotes[selected]++;
    setVotes(copyVotes);
  };

  const handleOnclickAnecdote = () => {
    const numberRandom = Math.floor(Math.random() * anecdotes.length);
    setSelected(numberRandom);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button className="btn btn-light m-2" onClick={handleOnclickVotes}>
        Vote
      </button>
      <button className="btn btn-dark m-2" onClick={handleOnclickAnecdote}>
        Next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[maxVotes]} votes={votes[maxVotes]} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App anecdotes={anecdotes} />
);
