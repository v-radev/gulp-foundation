"use strict";
let mix = require('laravel-mix');
let path = require('path');
let config = require('./config');
let glob = require('glob');

let sourceJS = path.join( config.root.source, config.tasks.js.source, '/*/*.js' );
let destinationJS = path.join( config.root.destination, config.tasks.js.destination ) + '/';
let JS = glob.sync(sourceJS);

JS.map(function(file){
    let foldersArray = file.split('/').reverse();
    let outputFolderName = foldersArray[1];
    let outputFile = outputFolderName + '/' + file.substr(file.lastIndexOf('/') + 1);

    mix.js(file, destinationJS + outputFile);
});
