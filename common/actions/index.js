export const SET_COUNTER = 'SET_COUNTER'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const set = (value) => ({
  type: SET_COUNTER,
  payload: value
})

export const increment = () => ({
  type: INCREMENT_COUNTER
})

export const decrement = () => ({
  type: DECREMENT_COUNTER
})

export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState()

  if (counter % 2 === 0) {
    return
  }

  dispatch(increment())
}

export const incrementAsync = (delay = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, delay)
}

export const getMatchesReq = (pageNo) => ({
  type: 'GET_MATCHES_REQ',
  pageNo: pageNo
})

export const getMatchesSuccess = (userList) => ({
  type: 'GET_MATCHES_SUCCESS',
  userList: userList
})

export const getPostReq = (postNo) => ({
  type: 'GET_POST_REQ',
  postNo: postNo
})

export const getPostSuccess = (post) => ({
  type: 'GET_POST_SUCCESS',
  post: post
})
