import * as React from 'react'


export default function GameBoard(props) {

  const { game } = props

  if (!game) return 'Loading...'
  console.log(game)

  const gameBoardP1 = (<div><p>{game.playerOne}</p>
  {game.playerOneBoard.map(
    row => <li key={row}>{row.map(
      column => <button>{column}</button>)}</li>)}
  </div>)

const gameBoardP2 = (<div><p>{game.playerTwo}</p>
  {game.playerTwoBoard.map(
    row => <li key={row}>{row.map(
      column => <button>{column}</button>)}</li>)}
  </div>)


  return (<div>
    <h1>Welcome to Game # {game.id}</h1>
    <i>{gameBoardP1}</i><i>{gameBoardP2}</i>
    <p>Player One (id): {game.playerOne} - Player Two (id): {game.playerTwo}</p>
  </div>)
}