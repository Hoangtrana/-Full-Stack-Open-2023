const Button = (props) => (
  <div>
    <button onClick={props.goodhandleClick}>good</button>
    <button onClick={props.neutralhandleClick}>neutral</button>
    <button onClick={props.badhandleClick}>bad</button>
  </div>
);

export default Button;
