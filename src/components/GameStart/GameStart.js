import './GameStart.css'
import Button from '../Button/Button';
import Instructions from '../Instructions/Instructions';

export default function GameStart(props) {
  return (
    <div className={`startMenu`}>
      <div className='gameStartContent'>
        <h1 className='gameTitle'>Welcome to Card Matcher</h1>
        <div className='buttonMenu'>
          <Button title={`${props.changeButton ? 'Continue' : 'Start'} Game`} onClick={() => {props.handleStartGame(!props.showGameStart)}}/>
          <Button title="Instructions" onClick={() => props.setShowInstructions(!props.showInstructions)}/>
          <Button title="Show Cards at Beginning" color={props.revealCards ? 'green' : 'white'} onClick={() => props.setRevealCards(!props.revealCards)}/>
        </div>
        <Instructions show={props.showInstructions}/>
      </div>
    </div> 
  );
}