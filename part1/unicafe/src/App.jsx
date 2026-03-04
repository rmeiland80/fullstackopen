// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(6);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(1);

  return (
    <div>
      <h2>give feedback</h2>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <h2>statistics</h2>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad} <br />
      all {good + neutral + bad} <br />
      average {good * 1 + (bad * -1) / (good + bad + neutral)} <br />
      positive {(good / (good + bad + neutral)) * 100} % <br />
    </div>
  );
};

export default App;
