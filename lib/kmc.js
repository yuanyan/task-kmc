var Execution = require('execution');
var path = require('path');
var Record = require('record');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, regexp, function and object.
    options: {
        name: {
            label: 'Package name',
            type: 'string'
        },
        src: {
            label: 'Src file',
            type: 'string'
        },
        dest: {
            label: 'Dest file',
            type: 'string'
        },
        dep: {
            label: 'Dep file',
            type: 'string'
        },
        packages: {
            label: 'KISSY package config',
            type: 'object'
        }
    },
    run: function (inputs, options, logger, settings) {
        return this._run(inputs, options, logger, settings);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;
        var packages = options.packages || {};
        var name = options.name;
        var src = path.resolve(options.src);
        var dest = path.resolve(options.dest);
        var dep = options.dep && path.resolve(options.dep);

        logger.log('Build KISSY modules with', src);

        var defaultPackage = {
            name: name,
            path: path.dirname(src),
            // hack for kmc
            base: path.dirname(src),
            ignorePackageNameInUri: true
        };

        if(Array.isArray(packages)){
            packages.push(
                defaultPackage
            );
        }else if(!packages[name]){
            packages[name] = defaultPackage
        }

        var kmc = require('kmc');
        kmc.config({
            packages: packages
        });

        kmc.build({
            src: src,
            dest: dest,
            depPath: dep
        });

        logger.log('File ' + dest + ' generated')

        resolve(inputs);
    }
})
