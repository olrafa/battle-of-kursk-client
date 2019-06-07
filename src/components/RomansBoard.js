import * as React from 'react'

const toArabic = require ('roman-numerals').toArabic
const toRoman = require ('roman-numerals').toRoman
const firstNumber = Math.floor(Math.random()*91)+10
const newNumber = Math.floor(Math.random()*91)+10

export default function RomansBoard(props) {

  const { roman } = props

  if (!roman) return 'Loading...'
  console.log(roman.roman)

  const displayedNumbers = (<div>
    <p>{toRoman(firstNumber)} + {toRoman(newNumber)} </p>
    </div>)

  const answerBox = (<div>
    <h4>Type the answer below IN ROMANS</h4><input type='text'></input><button>send</button></div>)


  return (
    <div>
      <h1>Welcome to Game # {roman.id}</h1>
      <h3>{displayedNumbers}</h3>
      <h4>{answerBox}</h4>
      <p>Player One (id): {roman.playerOne} - Player Two (id): {roman.playerTwo}</p>
    </div>
  )
}