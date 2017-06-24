
'use strict';

// -----------------------------------------------
// This is our main file and the entry point for our server application.
// It creates the server, loads all plugins, defines the API routes and
// listens on a particular port for incoming connections
// -----------------------------------------------

// Include Hapi package
const Hapi = require('hapi');

// -----------------------------------------------
// Create a server with a host and port
// Export the server variable for automated testing
// -----------------------------------------------
const server = new Hapi.Server();
const port = 3000;

const Frontend = require ('./hapiFrontend');
Frontend.init(server, port, () => {
    server.start((err) => {

        if (err) {

            throw err;
        }
        console.log('info', 'Server started at: ', port);
    });
});

