/*
combined files : 

foo/baz
foo/bar
foo/foo

*/
KISSY.add('foo/baz',function(S, require){
    return {}
})

KISSY.add('foo/bar',['./baz'], function(S, require){
    require('./baz')
})
KISSY.add('foo/foo',['./bar'], function(S, require){
    require('./bar')
})
