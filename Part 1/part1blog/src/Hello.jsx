//Use destructuring
/* The same as 
const Hello = (props) => {
  const { name, age } = props
*/
const Hello = ({ name, age }) => {
  //const name = props.name;
  // const age = props.age;
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Moi! {name}, you are {age} years old
      </p>
      <p>So you were probaby born in {bornYear()}</p>
    </div>
  );
};

export default Hello;
