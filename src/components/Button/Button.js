import './Button.css'

function Button(props) {
  return <button style={{backgroundColor: props.color}} onClick={props.onClick}>{props.title}</button>
}

export default Button;