/* 

import request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const TANK_PLACED = 'TANK_PLACED'
export const ATTACK_RECEIVED = 'ATTACK_RECEIVED'
export const MISSED_SHOT = 'MISSED_SHOT'
export const TANK_HIT = 'TANK_HIT'
export const DEFINE_WINNER = 'DEFINE_WINNER'

const tankPlaced = tank => ({
  type: TANK_PLACED,
  tank
})

export const placeTank = (row, column) => {
  request(`${baseUrl}/games/:id`)
  .then(response => { dispatch(tankPlaced(response))
  })
  .catch(console.error)
}

*/