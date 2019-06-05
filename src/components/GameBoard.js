import * as React from 'react'


export default function GameBoard(props) {

  const { game } = props

  if (!game) return 'Loading...'
  console.log(game.game)

  const gameBoardP1 = (<div><p>{game.game.playerOne}</p>
  <li>{game.game.board[0]}</li>
  <li>{game.game.board[1]}</li>
  <li>{game.game.board[2]}</li>
  <li>{game.game.board[3]}</li>
  <li>{game.game.board[4]}</li>
  <li>{game.game.board[5]}</li>
  <li>{game.game.board[6]}</li>
  <li>{game.game.board[7]}</li>
  <li>{game.game.board[8]}</li>
  <li>{game.game.board[9]}</li>
  </div>)


  return (<div>
    <h1>Welcome to Game # {game.game.id}</h1>
    <i>{gameBoardP1}</i>
    <p>Player One (id): {game.game.playerOne} - Player Two (id): {game.game.playerTwo}</p>
  </div>)
}