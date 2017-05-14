
const matches = (state = [], action) => {
  switch (action.type) {
    case 'GET_MATCHES_REQ':
      return {
        pageNo: action.pageNo,
        api: "requesting"
      }
    case 'GET_MATCHES_SUCCESS':
      return {
        list: action.userList,
        api: "success"
      }
    default:
      return state
  }
}

export default matches
