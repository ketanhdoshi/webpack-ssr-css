// -----------------------------------------------------------------
// Handles the orchestration of all the React server-side rendering for each request
// Uses the common routes to figure out which React component to delegate
// the request to, and then returns the rendered output as a response
// -----------------------------------------------------------------
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'

import configureStore from '../common/store/configureStore'
import { getRoutes } from '../common/routes/routes'

function expressRender(req, res) {
    console.info (req.url)

    // Compile an initial state and create a new Redux store instance
    const preloadedState = { }
    const store = configureStore(preloadedState)

    var html = ''
    var routes = getRoutes (store)
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // Render the component to a string
            html = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                    )

            // Grab the initial state from our Redux store
            const finalState = store.getState()

            // Send the rendered page back to the client
            // Use the html template in file 'index.ejs'
            // The React rendered output replaces the %html% tag
            // in the template
            res.render('index',
                    {
                        html: html,
                        state: JSON.stringify(finalState).replace(/</g, '\\x3c'),
                    }
            )
        } else {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.

            res.status(404).send('Not found')
        }
    })
}

export default expressRender