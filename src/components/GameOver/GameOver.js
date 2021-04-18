import './GameOver.css'
import GameOverSubTitle from './GameOverSubtitle/GameOverSubTitle';
import Button from '../Button/Button';

export default function GameOver(props) {
  return (
    <div className='gameOver'>
      <div className='gameOverContent'>
        <h1>Game Over!</h1>
        <GameOverSubTitle isTie={props.isTie} winningPlayerName={props.winningPlayerName}/>
        <Button title="New Game" onClick={() => {props.resetGame()}}/>
      </div>
    </div>
  )
}