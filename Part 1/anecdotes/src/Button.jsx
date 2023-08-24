const Button = (props) => (
  <div>
    <button onClick={props.votehanleClick}>vote</button>
    <button onClick={props.handleClick}>next anecdote</button>
  </div>
);

export default Button;
