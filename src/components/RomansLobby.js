import * as React from 'react'
import { Link } from 'react-router-dom'
//import './GameLobby.css'

export default function RomansList(props) {
  const { romans } = props

  if (!romans) return 'Loading...'

  const romansList = romans && romans
    .map(roman => <li key={roman.id}>
      <Link to={`/romans/${roman.id}`}>
        Game #{roman.id}
      </Link>
    </li>)
 
  return (
    <div className='roman-lobby'>
      <h1>Welcome</h1>
      <ul>{romansList}</ul>
    </div>
  )
 
}