import request from 'superagent'

export const USER_FETCHED = 'USER_FETCHED'

const baseUrl = 'http://localhost:4000'

const userFetched = user => ({
  type: USER_FETCHED,
  user: user
})

export const loadUser = (id) => (dispatch, getState) => {
  const user = getState().user
  // console.log('user', user)

  if (user && user.id === id) {
    return user
  } else {
    const url = `${baseUrl}/users/${id}`

    request(url)
      .then(response => {
        // console.log("response.body test:", response.body)
        const action = userFetched(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}