//Helper function
import { useState } from "react";
import Counter from "./Counter";

import Button from "./Button";
const App = () => {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAllClicks] = useState([]);

  const inCreasebyOne = () => setCounter(counter + 1);
  const deCreasebyOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  // Using object spread
  //{ ...clicks } creates a new object that has copies of all of the properties of the clicks object.
  /**/ const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
    setAllClicks(allClicks.concat("L"));
  };

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
    setAllClicks(allClicks.concat("R"));
  };

  return (
    <div>
      <Counter counter={counter} />
      <Button handleClick={inCreasebyOne} text="plus" />
      <Button handleClick={deCreasebyOne} text="minus" />
      <Button handleClick={setToZero} text="zero" />
      <Counter counter={clicks.left} />
      <Counter counter={allClicks[0]} />
      <Button handleClick={handleLeftClick} text="left" />
      <Counter counter={clicks.right} />
      <Button handleClick={handleRightClick} text="right" />
      <p>{allClicks.join(" ")}</p>
    </div>
  );
};

export default App;
