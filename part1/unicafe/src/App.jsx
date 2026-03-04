// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return total ? (
    <>
      <h2>statistics</h2>
      {total ? (
        <>
          good {good} <br />
          neutral {neutral} <br />
          bad {bad} <br />
          all {good + neutral + bad} <br />
          average {good * 1 + (bad * -1) / (good + bad + neutral)} <br />
          positive {(good / (good + bad + neutral)) * 100} % <br />
        </>
      ) : (
        <></>
      )}
    </>
  ) : (
    <>
      <h2>statistics</h2>
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
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
