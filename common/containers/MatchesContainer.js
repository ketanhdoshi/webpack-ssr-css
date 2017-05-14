// -----------------------------------------------------------------
// Container component for the example Matches page
// Written as an example during the initial Redux experimentation
// to invoke actions which call the backend API to fetch data, how to pass 
// props to the presentational component and how to handle user events 
// generated in that component.
// Clean up the logic here and re-write it based on the actual 
// functionality needed in the app
// -----------------------------------------------------------------
import { connect } from 'react-redux'
import MatchesView from '../components/MatchesView'
import { getMatchesReqAction, 
         getMatchesSuccessAction, 
         getPostReqAction, 
         getPostSuccessAction } 
     from '../actions/action.js'

const getMatches = (store) => {
  return (nextState, replace) => {
    // Do something with your store
    console.log (nextState.location.pathname)
    getMatchesReqAction (store.dispatch, 6)
  }
};

const dummyClick = (filter) => {
    return "dummy Click"
}

const mapStateToProps = (state, ownprops) => ({
   status: state.matches.api,
   list: state.matches.list,
   post: state.posts.post ? state.posts.post : {title: "gosh"}
})

const mapDispatchToProps = (dispatch) => ({
  onClickCb: () => { 
      getPostReqAction (dispatch, 4)
  },
  fetchCb: () => { 
      getMatchesReqAction (dispatch, 17)
  }
})

const MatchesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchesView)

export {MatchesContainer, getMatches}
