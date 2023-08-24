import { useState } from "react";
import Button from "./Button";
import Statistic from "./Statistic";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPostive] = useState(0);
  const [showStatistic, setShowStatistic] = useState(false);

  const string = "No feedback given";

  const goodhandleClick = () => {
    setGood(good + 1);
    setShowStatistic(true);
    console.log("good clicked");
  };
  const neutralhandleClick = () => {
    setNeutral(neutral + 1);
    setShowStatistic(true);
    console.log("neutral clicked");
  };
  const badhandleClick = () => {
    setBad(bad + 1);
    setShowStatistic(true);
    console.log("bad clicked");
  };

  return (
    <div>
      <h1>give feedback</h1>

      <Button
        goodhandleClick={goodhandleClick}
        neutralhandleClick={neutralhandleClick}
        badhandleClick={badhandleClick}
      />

      <h1>statistic</h1>
      {showStatistic ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          all={good + neutral + bad}
          average={Math.round((good + neutral + bad) / 3).toFixed(2)}
        />
      ) : (
        string
      )}
    </div>
  );
}

export default App;
