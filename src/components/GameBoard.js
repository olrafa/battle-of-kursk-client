import * as React from 'react'


export default function GameBoard(props) {

  const { game } = props

  if (!game) return 'Loading...'
  console.log(game.game)

  const gameBoardP1 = (<div><p>{game.game.playerOne}</p>
  <li>{game.game.playerOneBoard[0].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[1].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[2].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[3].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[4].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[5].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[6].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[7].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[8].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerOneBoard[9].map(column => <button>{column}</button>)}</li>
  </div>)

const gameBoardP2 = (<div><p>{game.game.playerTwo}</p>
  <li>{game.game.playerTwoBoard[0].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[1].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[2].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[3].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[4].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[5].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[6].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[7].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[8].map(column => <button>{column}</button>)}</li>
  <li>{game.game.playerTwoBoard[9].map(column => <button>{column}</button>)}</li>
  </div>)


  return (<div>
    <h1>Welcome to Game # {game.game.id}</h1>
    <i>{gameBoardP1}</i><i>{gameBoardP2}</i>
    <p>Player One (id): {game.game.playerOne} - Player Two (id): {game.game.playerTwo}</p>
  </div>)
}