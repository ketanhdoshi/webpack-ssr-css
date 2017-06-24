'use strict';

const Path = require('path');
import hapiRender from '../built/serverbundle.js';

// -----------------------------------------------
// This is our frontend web UI server.
// -----------------------------------------------
var frontend = null;

const hapitestHandler = function (request, reply) {

    reply.view('hapitest', {
        html: '<h2>Hello Chintu</h2>',
        message: 'My Morning Message!'
    });
};

module.exports.init = (server, port, doneCB) => {

    frontend = server.connection({
        host: 'localhost',
        port: port,
        labels: 'frontend'
    });

    // -----------------------------------------------
    // Load inert plugin for static content
    // -----------------------------------------------
    frontend.register(require('inert'), (err) => {

        if (err) {
            throw err;
        }

        // Route for a single test URL using a static HTML file
        frontend.route({
            method: 'GET',
            path: '/hello',
            handler: function (request, reply) {
                reply.file('./server/hapihello.html');
            }
        });

        // Serve static content at the built URL from the built directory
        frontend.route({
            method: 'GET',
            // URL for serving content is '/built/*'
            path: '/built/{param}',
            handler: {
                directory: {
                    path: Path.join(__dirname, '../built')
                }
            }
        });

    });
    
    // -----------------------------------------------
    // Load vision plugin for rendering templates
    // -----------------------------------------------
    frontend.register(require('vision'), (err) => {

        if (err) {
            throw err;
        }

        // Use the ejs template engine for all '*.ejs' files
        frontend.views({
            engines: { ejs: require('ejs') },
            relativeTo: __dirname,
            //path: 'templates'
        });

        // Render a single test URL path using a test template
        frontend.route({ method: 'GET', path: '/hapitest', handler: hapitestHandler });
        
        // Render all URLs with React
        frontend.route({ method: 'GET', path: '/{param*}', handler: hapiRender });
        
        doneCB();
    });
}