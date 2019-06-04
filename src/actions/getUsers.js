import request from 'superagent'

export const USERS_FETCHED = 'USERS_FETCHED'

const baseUrl = 'http://localhost:4000'

const usersFetched = users => ({
  type: USERS_FETCHED,
  users: users
})

export const loadusers = () => (dispatch, getState) => {
  if (getState().users) { return getState().users }
  else {
    request(`${baseUrl}/users`)
      .then(response => {
        dispatch(usersFetched(response.body))
      })
      .catch(console.error)
  }
}