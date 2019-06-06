import * as React from 'react'
import { Link } from 'react-router-dom'
import './GameLobby.css'

export default function GamesList(props) {
  const { games } = props

  if (!games) return 'Loading...'

  const gamesList = games && games
    .map(game => <li key={game.id}>
      <Link to={`/games/${game.id}`}>
        Game #{game.id}
      </Link>
    </li>)
 
  return (
    <div className='game-lobby'>
      <h1>Welcome</h1>
      <ul>{gamesList}</ul>
    </div>
  )
 
}