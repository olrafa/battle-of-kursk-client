import * as React from 'react'

export default function GameBoard(props) {

  const { game } = props

  if (!game) return 'Loading...'
  console.log(game)

/* there should be actually a difference here: localUser and opponentUser. 
    So, instead of rendering gameBoardP1 and gameBoardP2, we would render
    gameBoardLocal and gameBoardOpponent. 
    This would be based on login, socket, I dont know*/

  const gameBoardP1 = (
    <div>
      <h3>{game.playerOne}'s board</h3>

    {game.playerOneBoard.map(row => 
      <li>{row.map( column => 
      <button>{column}</button>)}</li>)}
    </div>)

  const fleetP1 = (
    <div>
      <button>Add a tank!</button>
      <ul>Available vehicles:
        <li>Armored Vehicles (
          {game.playerOneArmoredVehiclesCount})
          </li>
        <li>Light Tanks (
          {game.playerOneLightTanksCount})
        </li>
        <li>Medium Tanks (
          {game.playerOneMediumTanksCount})
        </li>
        <li>Heavy Tanks (
          {game.playerOneHeavyTanksCount})
        </li>
      </ul>
    </div>
  )

  const gameBoardP2 = (
    <div>
      <h3>{game.playerTwo}'s board</h3>
      {game.playerTwoBoard.map(row => 
      <li>{row.map(column => 
      <button>{column}</button>)}</li>)}
    </div>
  )

  return (
    <div>
      <h1>Welcome to Game # {game.id}</h1>
      <i>{gameBoardP1}</i><i>{fleetP1}</i>
      <i>{gameBoardP2}</i>
      <p>Player One (id): {game.playerOne} - Player Two (id): {game.playerTwo}</p>
    </div>
  )
}