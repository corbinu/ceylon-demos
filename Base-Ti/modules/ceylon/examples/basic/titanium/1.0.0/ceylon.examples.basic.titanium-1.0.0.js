(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.titanium","$mod-version":"1.0.0","ceylon.examples.basic.titanium":{"$pkg-shared":"1","run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.examples.basic.titanium`."]},"$nm":"run"}}};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function run(){
    /*Begin dynamic block*/
    if((tmpvar$2=(typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).version,tmpvar$3=$$$cl1.Float(3.1),(tmpvar$2.compare&&tmpvar$2.compare(tmpvar$3).equals($$$cl1.getSmaller()))||tmpvar$2<tmpvar$3)){
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Sorry - this application template requires Titanium Mobile SDK 3.1 or later. The current version is ",100).plus((typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).version));
    }if((tmpvar$4=(typeof global==='undefined'||global===null?$$$cl1.throwexc('Undefined or null reference: global'):global).device.getType(),tmpvar$5=$$$cl1.String("unknown",7),(tmpvar$4.equals&&tmpvar$4.equals(tmpvar$5))||tmpvar$4===tmpvar$5)){
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Could not determine device type",31).valueOf());
    }else {
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Device type general ",20).plus((typeof global==='undefined'||global===null?$$$cl1.throwexc('Undefined or null reference: global'):global).device.getTypeGeneral()).plus($$$cl1.String(" specifically ",14)).plus((typeof global==='undefined'||global===null?$$$cl1.throwexc('Undefined or null reference: global'):global).device.getType()));
    }/*End dynamic block*/
};run.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['run']};//run.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
