(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.basic.browser":{"$pkg-shared":"1","init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.basic.browser`."]},"$nm":"init"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.browser","$mod-version":"1.0.0"};
var $$$cl28=require('ceylon/language/0.6/ceylon.language-0.6');

//MethodDefinition init at run.ceylon (1:0-7:0)
function init(){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl28.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl28.String(".main",5).valueOf()).text($$$cl28.String("Text changed by ceylon",22).valueOf());
    /*End dynamic block*/
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[],$an:function(){return[$$$cl28.shared()];},pkg:'ceylon.examples.basic.browser',d:$$METAMODEL$$['ceylon.examples.basic.browser']['init']};//init.$$targs$$={Arguments:{t:$$$cl28.Empty},Return:{t:$$$cl28.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
