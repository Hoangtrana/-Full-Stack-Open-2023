const Total = ({ data2 }) => {
  const totalNumberOfExcercises = data2.reduce(
    (total, item) => total + item.exercises,
    0
  );
  return (
    <div>
      <li>Number of exercises {totalNumberOfExcercises}</li>
    </div>
  );
};

export default Total;
