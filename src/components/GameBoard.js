import * as React from 'react'
import GamePlay from './GamePlay'

export default function GameDetails(props) {

  const { game } = props

  if (!game) return 'Loading...'
  console.log(game)

  return (<div>
    <h1>Welcome to Game # {game.game.id}</h1>
    <i>{game.game.board}</i>
    <p>Player One (id): {game.game.playerOne}</p>
    <p>Player Two (id): {game.game.playerTwo}</p>
  </div>)
}