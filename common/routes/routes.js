// -----------------------------------------------------------------
// Common routes for both client and server-side
// -----------------------------------------------------------------

import React from 'react'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, createMemoryHistory } from 'react-router'

import MyCounter from '../containers/MyCounter'
import Dashboard from '../components/Dashboard'
import Home from '../components/Home'
import AppContainer from '../containers/AppContainer'
import MainContainer from '../containers/MainContainer'
import { MatchesContainer, getMatches } from '../containers/MatchesContainer'
import NavbarFull from '../components/NavbarFull'
import NavbarMini from '../components/NavbarMini'
import NavbarSub from '../components/NavbarSub'
import PaymentView from '../components/PaymentView'
import ShortlistContainer from '../containers/ShortlistContainer'
import LoginContainer from '../containers/LoginContainer'
import BsView from '../components/bs/BsView';

var history;
if (typeof(window) !== 'undefined'){
    // Use this history on the client
    history = browserHistory;
}
else {
    // Use this history for server-side rendering
    history = createMemoryHistory();
}

export const getRoutes = (store) => {
    return (
        <Router history={history}>
            {/* Every route in the app must be inside the AppContainer */}
            <Route path="/" component={AppContainer}>
                {/* Root path redirects to the home page */}
                <IndexRedirect to="/home" />
                {/* All logged-in routes must be inside MainContainer */}
                <Route component={MainContainer}>
                    <Route path="/home" component={Home}/>
                    <Route path="/bsview" component={BsView}/>
                    {/* Everything below Home including NavbarFull and 
                        NavbarMini and all child pages are older pages
                        from the initial pre-CSS experiments and may be
                        removed eventually. For now the real UI is being
                        built in the MainContainer and Home and its
                        sub-components
                    */}
                    <Route component={NavbarFull}>
                        {/* Most Logged-in pages use the full Navbar */}
                        <Route path="/dashboard" component={Dashboard}/>                        
                        <Route component={NavbarSub}>
                            <Route path="/matches" component={MatchesContainer} onEnter={getMatches(store)}/>
                            <Route path="/shortlist" component={ShortlistContainer}/>
                        </Route>
                    </Route>
                    <Route component={NavbarMini}>
                        {/* Logged-in pages with a mini Navbar */}
                        <Route path="/payment" component={PaymentView}/>
                    </Route>
                </Route>
                {/* These are the non-logged-in pages */}
                <Route path="/login" component={LoginContainer}/>
                <Route path="/counter" component={MyCounter}/>
            </Route>
        </Router>
    )
}
