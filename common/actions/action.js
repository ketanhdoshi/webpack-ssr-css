import { getMatchesReq, 
         getMatchesSuccess,
         getPostReq,
         getPostSuccess,
       } from './index'

import { apiGetUsers, 
         apiGetPost,
       } from '../api/api'

export const getMatchesReqAction = (dispatch, pageNo) => {
    console.log ("get matches request")
    apiGetUsers (getMatchesSuccessAction, dispatch)
    dispatch (getMatchesReq (pageNo))
}

export const getMatchesSuccessAction = (dispatch, userList) => {
    console.log ("get matches success", userList)
    dispatch (getMatchesSuccess (userList))
}

export const getPostReqAction = (dispatch, postNo) => {
    console.log ("get post request")
    apiGetPost (postNo, getPostSuccessAction, dispatch)
    dispatch (getPostReq (postNo))
}

export const getPostSuccessAction = (dispatch, post) => {
    console.log ("get post success", post)
    dispatch (getPostSuccess (post))
}