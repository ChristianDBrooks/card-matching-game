export default function GameOverSubtitle(props) {
  return props.isTie 
  ? <p>{props.winningPlayerName} wins!</p>
  : <p>Tie Game!</p>
}