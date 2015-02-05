'use strict';

var assert = require('assert');
var Kmc = require('../lib/kmc');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Kmc).run(
    [], // inputs
    {
        combo: true,
        src: __dirname + '/fixtures/mods/*.js',
        base: __dirname + '/fixtures/',
        dest: __dirname + '/expected/',
        dep: __dirname + '/expected/mods-dep.js',
        packages: {
            mods: {
                base: 'fixtures/mods',
                ignorePackageNameInUri: true
            }
        }
    }, // options
    console // logger
).then(function(inputs){

    }).catch(errorHandler);


(new Kmc).run(
    [], // inputs
    {
        name: 'foo/',
        src: __dirname + '/fixtures/foo.js',
        dest: __dirname + '/expected/foo.js'
    }, // options
    console // logger
).then(function(inputs){

    }).catch(errorHandler);
