import "./Card.css";

function Card(props) {
  return (
    <div className="scene" onClick={() => {props.onClick(props.index)}}>
      <div className={`card ${props.selected || props.matched ? 'is-flipped' : ''} ${props.matched ? props.turn ? 'fly-right' : 'fly-left' : ''}`}>
        <div className="card__face card__face--front"></div>
        <div className={`card__face card__face--back card-${props.groupId}`}></div>
      </div>
    </div>
  );
}

export default Card;
