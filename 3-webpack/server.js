'use strict';
const browserSync = require('browser-sync');
const spawn = require('child_process').spawn;

// Start Browsersync
browserSync({
    server: '.',
    port: process.env.PORT || 3000,
    files: ['index.html', 'build/**/*.js'],
    open: false,
    reloadOnRestart: true,
    notify: false
});

// Start webpack watch
spawn('npm', ['run', 'watch'], {stdio: 'inherit'});
