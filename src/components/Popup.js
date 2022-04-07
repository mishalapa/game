import React, {useEffect} from 'react'
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable,playAgain}) => {
    let finallMessage = "";
    let finallMessageRevealWord = "";
    let playable = true;

    if(checkWin(correctLetters,wrongLetters, selectedWord) === 'win') {
        finallMessage = 'Поздравляю! Вы выиграли!'
        playable = false;
    } else if(checkWin(correctLetters,wrongLetters, selectedWord) === 'lose') {
        finallMessage = 'К сожалению вы проиграли'
        finallMessageRevealWord = `... правильное слово: ${selectedWord}`
        playable = false;
    }

    useEffect(() => setPlayable(playable))

  return (
    <div className="popup__container" style={finallMessage !== '' ? {display: 'flex'} : {}}>
        <div className="popup">
            <h2>{finallMessage}</h2>
            <h3>{finallMessageRevealWord}</h3>
            <button onClick={playAgain}>Играть снова</button>
        </div>
    </div>
  )
}

export default Popup