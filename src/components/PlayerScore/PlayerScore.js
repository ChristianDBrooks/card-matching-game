import './PlayerScore.css';

export default function PlayerScore(props) {

  return (
    <div id={props.id} className={`player ${props.turn ? 'active' : ''}`}>
      <h4 className='playerName'>{props.name}</h4>
      <p className='score'>Score: {props.score}</p>
    </div>
  );
}