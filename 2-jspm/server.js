'use strict';
const httpServer = require('http-server');
const port = process.env.PORT || 3000;

const server = httpServer.createServer({
    root: '.',
    cache: -1,
    robots: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }
});

require('chokidar-socket-emitter')({
    app: server.server,
    chokidar: {
        ignored: [
            /[\/\\]\./,
            'node_modules/**',
            'jspm_packages/**',
            '.DS_Store',
            '.*/**'
        ]
    }
});

server.listen(port);
console.log('Server started on port ' + port);
