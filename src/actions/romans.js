import request from 'superagent'

export const ROMANS_FETCHED = 'ROMANS_FETCHED'

const baseUrl = 'http://localhost:4000'

const romansFetched = romans => ({
  type: ROMANS_FETCHED,
  romans
})

export const loadRomans = () => (dispatch, getState) => {
  if (getState().romans) return
  request(`${baseUrl}/romans`)
  .then(response => {
    dispatch(romansFetched(response.body.romans))
  })
  .catch(console.error)
}

export const ROMAN_CREATE_SUCCESS = 'ROMAN_CREATE_SUCCESS'

const romanCreateSuccess = roman => ({
  type: ROMAN_CREATE_SUCCESS,
  roman
})

export const createRoman = data => dispatch => {
  request
    .post(`${baseUrl}/romans`)
    .send(data)
    .then(response => {
      dispatch(romanCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const ROMAN_FETCHED = 'ROMAN_FETCHED'

const romanFetched = roman => ({
  type: ROMAN_FETCHED,
  roman
})

export const loadRoman = (id) => (dispatch) => {
  request(`${baseUrl}/romans/${id}`)
  .then(response => {
    dispatch(romanFetched(response.body))
  })
  .catch(console.error)
}

export const ROMAN_UPDATE_SUCCESS = 'ROMAN_UPDATE_SUCCESS'

const romanUpdateSuccess = roman => ({
  type: ROMAN_UPDATE_SUCCESS,
  roman
})

export const updateRoman = (id, data) => dispatch => {
  request
  .patch(`${baseUrl}/romans/${id}`)
  .send(data)
  .then(response => {
    dispatch(romanUpdateSuccess(response.body))
  })
  .catch(console.error)
}