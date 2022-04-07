import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import {showNotification as show} from './helpers/helpers'

import './App.css';
import WrongLetters from './components/WrongLetters';
import Popup from './components/Popup';
import Notification from './components/Notification';
const questions = ['Электромеханическое устройство, предназначенное для записи звуковой информации на магнитные носители','Структура определяющая особенности отношений и поведения личности','Центральная часть атома','Как называется двухместный велосипед','Животное с телом льва и головой человека','Это профессиональный повар, создающий десерты','Пресный белый хлеб, распространённый у народов Кавказа','Металлический сосуд для кипячения']
const words = ['магнитофон','характер', 'ядро', 'тандем', 'сфинкс', 'кондитер','лаваш','самовар'];


let selectedWord = words[Math.floor(Math.random() * words.length)];
let indexWord = words.indexOf(selectedWord)
let selectedQuestion = questions[indexWord]

function App() {
  const[playable, setPlayable] = useState(true)
  const[correctLetters, setCorrectLetters] = useState([])
  const[wrongLetters, setWrongLetters] = useState([])
  const[showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90 || keyCode == 188 || keyCode == 186 || keyCode == 190 || keyCode == 219 || keyCode == 221 || keyCode == 222) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [... currentLetters, letter])
            } else {
              show(setShowNotification)
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [... wrongLetters, letter])
            } else {
              show(setShowNotification)
            }
          }
        }
    } 

    window.addEventListener('keydown', handleKeydown)

    return () => window.removeEventListener('keydown', handleKeydown)
  }, [correctLetters, wrongLetters, playable])

  function playAgain() {
    setPlayable(true)
    setCorrectLetters([])
    setWrongLetters([])
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random]
    indexWord = words.indexOf(selectedWord)
    selectedQuestion = questions[indexWord]
  }

  return (
   <>
      <Header selectedQuestion={selectedQuestion}/>
      <div className='game__container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
   </>
  );
}

export default App;
