import './Game.css';
import CardModel from '../../models/CardModel';
import Card from '../Card/Card';
import Button from '../Button/Button';
import PlayerScore from '../PlayerScore/PlayerScore';
import GameStart from '../GameStart/GameStart';
import GameOver from '../GameOver/GameOver';
import { useState } from 'react';

let debuggingOn = false;

function debugLog(logMsg) {
  if (debuggingOn) console.log(logMsg);
}

export default function Game() {

  let deck = generateDeck(10);
  let firstCard = null;
  let secondCard = null;
  let playerScores = [0, 0]
  let players = ['Player One', 'Player Two'];
  let [playerTurn, setPlayerTurn] = useState(0);
  const [revealCards, setRevealCards] = useState(true);
  const [cardList, setCardList] = useState(buildCardList(deck));
  const [showGameOver, setShowGameOver] = useState(false);
  const [showGameStart, setShowGameStart] = useState(true);
  const [changeButton, setChangeButton] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)

  return (
      <div className='gameBorder'>
        { 
          showGameStart
          ? <GameStart 
              changeButton={changeButton}
              handleStartGame={handleStartGame}
              showGameStart={showGameStart}
              setShowInstructions={setShowInstructions}
              showInstructions={showInstructions}
              setRevealCards={setRevealCards}
              revealCards={revealCards}/>
          : null
        }

        { 
          showGameOver
          ? <GameOver
              isTie={[0, 1].includes(winningPlayer)}
              winningPlayerName={players[winningPlayer]}
              resetGame={resetGame}/>
          : null
        }

        <div className='gameBoard'>
          {cardList}
        </div>

        <div className='leaderBoard'>
          <PlayerScore
            id='playerOne' 
            name={players[0]}
            score={playerOneScore}
            turn={!playerTurn}
          />
          <PlayerScore
            id='playerTwo' 
            name={players[1]}
            score={playerTwoScore}
            turn={playerTurn}
          />
        </div>

        <div className='gameMenu buttonMenu'>
          <Button title="Main Menu" onClick={() => {setShowGameStart(!showGameStart)}}/>
          <Button title="Restart Game" onClick={() => {resetGame()}}/>
        </div>
      </div>
  );

  function generateDeck(numberOfPairs) {
    let deckArr = [];
    let sequence = 1;
    for (let i = 1; i <= numberOfPairs; i++) {
      deckArr.push(new CardModel(sequence++, i, "https://picsum.photos/200/300"))
      deckArr.push(new CardModel(sequence++, i, "https://picsum.photos/200/300"))
    }
    shuffle(deckArr)
    return deckArr
  }

  function buildCardList(data) {
    return data.map(c => {
      return (
        <Card key={c.id}
              index={c.index}
              groupId={c.groupId}
              selected={c.selected}
              flipped={c.flipped}
              matched={c.matched}
              turn={playerTurn}
              onClick={handleSelectCard}
        />
      )
    });
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];

      // This line is very important for the function of the games logic.
      // Sets the index of the card in the deck, after being shuffled.
      // This index is used for reference in the selection handling.
      array[currentIndex].index = currentIndex;
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function handleStartGame(showMenu) {
    if (!changeButton) setChangeButton(true);
    setShowGameStart(showMenu);
    if (!changeButton) revealAllCards();
  }

  function revealAllCards() {
    if (revealCards) {
      deck.forEach((card, index) => {
        setTimeout(() => {flipCard(card)}, (index + 1) * 100);
      })
    }
  }

  function flipCard(card) {
    // Use a unique field called 'flipped' so that game
    // logic doesn't get corrupted by using 'select'.
    card.flipped = true;
    // Once we render the deck changes, the cards will flip.
    setCardList(buildCardList(deck))
    // Reveal the card for a total of 2 seconds, then flip it back.
    setTimeout(() => {
      card.flipped = false;
      setCardList(buildCardList(deck))
    }, 2000);
  }

  function handleSelectCard(index) {
    // If both cards are already selected, don't register the selection.
    // Don't do anything if the card selected is already selected, or already matched.
    if ((firstCard && secondCard) ||
        (firstCard && firstCard.index === index) ||
        deck[index].selected || deck[index].matched ) return;

    deck[index].selected = true;

    // If its the first card selected, set a reference to the card in the deck.
    // Otherwise set a reference to the second card selected.
    if (!firstCard) {
      firstCard = deck[index]
    } else {
      secondCard = deck[index]
    }

    setCardList(buildCardList(deck));

    // Wait for the second card to show itself, before attempting to hide (deselect) it.
    let waitTime = firstCard && secondCard ? 1.5 * 1000 : 0;
    setTimeout(() => {
      if (firstCard && secondCard) {
        // Check if selected cards are a match
        checkForMatch(firstCard, secondCard);

        // Always deselect the cards. If they are a match
        // they will slide away because the 'matched' property on the card
        // is a fall back value that also shows the card.
        deselectCards(firstCard, secondCard)
      }
      
      // Render cards
      setCardList(buildCardList(deck));
  
      checkForEndGame();
    }, waitTime)
  }

  function checkForMatch(cardOne, cardTwo) {
    if (cardOne.groupId === cardTwo.groupId && cardOne.id !== cardTwo.id) {
      // Animate cards sliding off board.
      updateScores(cardOne, cardTwo)
    } else {
      switchTurns();
    }
  }

  function updateScores(cardOne, cardTwo) {
    debugLog('Updating score...')

    cardOne.matched = cardTwo.matched = true;

    // PlayerTurn is 0 or 1, so using it as the index we can select
    // what score in a 2 object array we want to update.
    playerScores[playerTurn] += 1;

    // Had to seperate out the playerScores into decoupled states,
    // and render state using setPlayerOne and setPlayerTwo
    // because I was having state manipulation issues I couldn't solve.
    // For example when retrieving the state of something I just updated,
    // it wouldn't be updated yet, and would still be in queue waiting to be updated.

    let [playerOneScr, playerTwoScr] = playerScores;

    setPlayerOneScore(playerOneScr);
    setPlayerTwoScore(playerTwoScr);
  }

  function deselectCards(cardOne, cardTwo) {
    // Render logic
    cardOne.selected = false;
    cardTwo.selected = false;

    // Game logic
    firstCard = null;
    secondCard = null;
  }

  function switchTurns() {
    debugLog('Switching player turns...');
    // Swap turns here.
    playerTurn = playerTurn ? 0 : 1;
    setPlayerTurn(playerTurn);
  }

  function checkForEndGame() {
    let unmatchedCardCount = deck.filter((card) => {
      return card.matched === false
    }).length

    if (unmatchedCardCount === 0) {
      
      debugLog('Game over...')
      if (playerScores[0] !== playerScores[1]) {
        // Get the indexOf the greater value
        setWinningPlayer(playerScores.indexOf(Math.max(playerScores[0], playerScores[1])));
      } else {
        // In the event of a tie
        setWinningPlayer(-1);
      }
      
      setShowGameOver(true);
    }
  }

  function resetGame() {
    debugLog('Resetting game...')
    deck = generateDeck(10);
    setTimeout(
      setCardList(buildCardList(deck)), 200
    )
    playerScores = [0, 0];
    firstCard = null;
    secondCard = null;
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setPlayerTurn(0)
    setShowGameOver(false);
    revealAllCards();
  }
}