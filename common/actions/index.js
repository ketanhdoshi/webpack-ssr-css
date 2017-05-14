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
