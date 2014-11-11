'use strict';

var assert = require('assert');
var Kmc = require('../lib/kmc');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Kmc).run(
    [], // inputs
    {
        name: 'foo/',
        src: __dirname + '/fixtures/foo.js',
        dest: __dirname + '/expected/foo.js'
    }, // options
    console // logger
).then(function(inputs){

}).catch(errorHandler)
