(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.basic.browser":{"$pkg-shared":"1","init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.basic.browser`."]},"$nm":"init"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.browser","$mod-version":"1.0.0"};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function init(){
    /*Begin dynamic block*/
    var jquery$2=(typeof require==='undefined'||require===null?$$$cl1.throwexc('Undefined or null reference: require'):require)($$$cl1.String("jquery",6).valueOf());
    jquery$2($$$cl1.String(".main",5).valueOf()).text($$$cl1.String("Text changed by ceylon",22).valueOf());
    /*End dynamic block*/
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.browser',d:$$METAMODEL$$['ceylon.examples.basic.browser']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
