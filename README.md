# task-kmc
> KISSY module compiler.

## The "kmc" task

### Usage Examples

```js
var kmc = new (require('task-kmc'))
kmc.run(inputs, options, logger)
```

### Options

#### options.name
Type: `path`

Package name.

#### options.src
Type: `string`

Src file.

#### options.dest
Type: `string`
Default: `'baz'`

Dest file.

#### options.dep
Type: `string`
Default: `'baz'`

Modules dependence config file dest path.

#### options.packages
Type: `object`

KISSY packages config.

#### options.map
Type: `boolean`

Generate all combo mode modules dependence config in dependence config file.

#### options.combo
Type: `boolean`

Online combo mode.


## Release History
* 2015-02-02 0.1.3  Add more options.
* 2014-11-11 0.1.2  Add `packages` option.
* 2014-11-11 0.1.0  Initial release.

## License
Copyright (c) 2014-2015 Yuanyan Cao. Licensed under the MIT license.
