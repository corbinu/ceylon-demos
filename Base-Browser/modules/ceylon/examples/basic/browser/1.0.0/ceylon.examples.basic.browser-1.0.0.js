(function(define) { define(function(require, exports, module) {
//!!!METAMODEL:{"ceylon.examples.basic.browser":{"$pkg-shared":"1","init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.basic.browser`."]},"$nm":"init"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.browser","$mod-version":"1.0.0"}
var $$$cl6=require('ceylon/language/0.6/ceylon.language-0.6');

//MethodDefinition init at run.ceylon (1:0-7:0)
function init(){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl6.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl6.String(".main",5).valueOf()).text($$$cl6.String("Text changed by ceylon",22).valueOf());
    /*End dynamic block*/
}
exports.init=init;
init.$$metamodel$$={$nm:'init',$mt:'mthd',$t:{t:$$$cl6.Anything},$ps:[],$an:function(){return[$$$cl6.shared()];}};//init.$$targs$$={Arguments:{t:$$$cl6.Empty},Return:{t:$$$cl6.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
