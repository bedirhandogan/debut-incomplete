import './styles.scss';

function Button(props) {
  return (
    <button className={`button ${props.type}`} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
