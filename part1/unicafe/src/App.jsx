// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return total ? (
    <>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={good + neutral + bad} />
          <StatisticLine
            text={"average"}
            value={good * 1 + (bad * -1) / (good + bad + neutral)}
          />
          <StatisticLine
            text={"positive"}
            value={(good / (good + bad + neutral)) * 100 + "%"}
          />
        </tbody>
      </table>
    </>
  ) : (
    <>
      <p>No feedback given</p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={"good"} onClick={() => setGood(good + 1)} />
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} onClick={() => setBad(bad + 1)} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
