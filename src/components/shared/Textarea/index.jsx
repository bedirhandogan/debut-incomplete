import './styles.scss';

function Textarea(props) {
  return <textarea className={`textarea ${props.className}`} {...props} />;
}

export default Textarea;
