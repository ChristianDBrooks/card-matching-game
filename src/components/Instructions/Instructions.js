import './Instructions.css'

export default function Instructions(props) {
  return (props.show 
    ? <p id={props.id} className='instructions'>The rules of the game our simple. Its a 2 player game. Player 1 goes first and selects two cards. If the cards match then they are removed from the board, and the player gets a point and another turn. The player continues to make selections until they don't make a matching selection. If two cards don't match they will be flipped back over and then player 2 gets to select cards with the same rules. This back and forth continues until all matched have been found between both players. Good luck!</p> 
    : '');
}