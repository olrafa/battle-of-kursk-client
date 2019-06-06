import request from 'superagent'

export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const userCreateSuccess = user => ({
  type: USER_CREATE_SUCCESS,
  user
})

export const createUser = (userData) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(userData) //where does data come from: from the parameter
    .then(response => {
      dispatch(userCreateSuccess(response.body))
    })
    .catch(console.error)
}