import request from 'superagent'

export const GAMES_FETCHED = 'GAMES_FETCHED'

const baseUrl = 'http://localhost:4000'

const gamesFetched = games => ({
  type: GAMES_FETCHED,
  games
})

export const loadGames = () => (dispatch, getState) => {
  if (getState().games) return
  request(`${baseUrl}/games`)
  .then(response => {
    dispatch(gamesFetched(response.body.games))
  })
  .catch(console.error)
}

export const GAME_CREATE_SUCCESS = 'GAME_CREATE_SUCCESS'

const gameCreateSuccess = game => ({
  type: GAME_CREATE_SUCCESS,
  game
})

export const createGame = data => dispatch => {
  request
    .post(`${baseUrl}/games`)
    .send(data)
    .then(response => {
      dispatch(gameCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const GAME_FETCHED = 'GAME_FETCHED'

const gameFetched = game => ({
  type: GAME_FETCHED,
  game
})

export const loadGame = (id) => (dispatch) => {
  request(`${baseUrl}/games/${id}`)
  .then(response => {
    dispatch(gameFetched(response.body.game))
  })
  .catch(console.error)
}

export const GAME_UPDATE_SUCCESS = 'GAME_UPDATE_SUCCESS'

const gameUpdateSuccess = game => ({
  type: GAME_UPDATE_SUCCESS,
  game
})

export const updateGame = (id, data) => dispatch => {
  request
  .patch(`${baseUrl}/games/${id}`)
  .send(data)
  .then(response => {
    dispatch(gameUpdateSuccess(response.body.game))
  })
  .catch(console.error)
}