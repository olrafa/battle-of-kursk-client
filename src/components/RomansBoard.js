import * as React from 'react'

export default function RomansBoard(props) {

  const { roman } = props

  if (!roman) return 'Loading...'
  console.log(roman.roman)


  return (
    <div>
      <h1>Welcome to Game # {roman.id}</h1>
      <p>Player One (id): {roman.playerOne} - Player Two (id): {roman.playerTwo}</p>
    </div>
  )
}