import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ data }) => {
  const [good, neutral, bad] = data;
  const all = data.reduce((a, b) => a + b);
  const average = all ? (all / data.length).toFixed(2) : 0;
  const positive = all > 0 ? ((good * 100) / all).toFixed(2) : 0;

  if (all === 0) return <h3>No feedback given</h3>;
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={all} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive + "%"} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //   Functions
  const handleOnlclickGood = () => setGood(good + 1);
  const handleOnlclickNeutral = () => setNeutral(neutral + 1);
  const handleOnlclickBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleOnlclickGood} text="Good" />
      <Button onClick={handleOnlclickNeutral} text="Neutral" />
      <Button onClick={handleOnlclickBad} text="Bad" />
      <Statistics data={[good, neutral, bad]} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
