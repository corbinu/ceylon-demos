(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.node","ceylon.examples.basic.node":{"hello":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Request"},"$mt":"prm","$pt":"v","$nm":"req"},{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Response"},"$mt":"prm","$pt":"v","$nm":"res"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hello"},"$pkg-shared":"1","Application":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$m":{"get":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"route"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Request"},"$mt":"prm","$pt":"v","$nm":"req"},{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Response"},"$mt":"prm","$pt":"v","$nm":"res"}]],"$mt":"prm","$pt":"f","$nm":"handle"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"get"},"listen":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"port"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"listen"}},"$nm":"Application"},"Response":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$m":{"send":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"response"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"send"}},"$nm":"Response"},"Express":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$m":{"createApplication":{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Application"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createApplication"}},"$nm":"Express"},"Request":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$nm":"Request"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.basic.node`."]},"$nm":"run"},"nativejs":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nativejs"}},"$mod-version":"1.0.0"};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function nativejs(){
}
exports.nativejs=nativejs;
nativejs.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.node',d:$$METAMODEL$$['ceylon.examples.basic.node']['nativejs']};//nativejs.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
function Express($$express){
}
Express.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];},pkg:'ceylon.examples.basic.node',d:$$METAMODEL$$['ceylon.examples.basic.node']['Express']};
exports.Express=Express;
function $init$Express(){
    if (Express.$$===undefined){
        $$$cl1.initTypeProto(Express,'ceylon.examples.basic.node::Express');
    }
    return Express;
}
exports.$init$Express=$init$Express;
$init$Express();
function Request($$request){
}
Request.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];},pkg:'ceylon.examples.basic.node',d:$$METAMODEL$$['ceylon.examples.basic.node']['Request']};
exports.Request=Request;
function $init$Request(){
    if (Request.$$===undefined){
        $$$cl1.initTypeProto(Request,'ceylon.examples.basic.node::Request');
    }
    return Request;
}
exports.$init$Request=$init$Request;
$init$Request();
function Response($$response){
}
Response.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];},pkg:'ceylon.examples.basic.node',d:$$METAMODEL$$['ceylon.examples.basic.node']['Response']};
exports.Response=Response;
function $init$Response(){
    if (Response.$$===undefined){
        $$$cl1.initTypeProto(Response,'ceylon.examples.basic.node::Response');
    }
    return Response;
}
exports.$init$Response=$init$Response;
$init$Response();
function Application($$application){
}
Application.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];},pkg:'ceylon.examples.basic.node',d:$$METAMODEL$$['ceylon.examples.basic.node']['Application']};
exports.Application=Application;
function $init$Application(){
    if (Application.$$===undefined){
        $$$cl1.initTypeProto(Application,'ceylon.examples.basic.node::Application');
    }
    return Application;
}
exports.$init$Application=$init$Application;
$init$Application();
function hello(req$2,res$3){
    res$3.send($$$cl1.String("Hello, World!!!",15).valueOf());
}
exports.hello=hello;
hello.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'req',$mt:'prm',$t:{t:Request}},{$nm:'res',$mt:'prm',$t:{t:Response}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.node',d:$$METAMODEL$$['ceylon.examples.basic.node']['hello']};//hello.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Response},Element:{t:Response}}},Return:{t:$$$cl1.Anything}};
function run(){
    /*Begin dynamic block*/
    var express$4=(typeof require==='undefined'||require===null?$$$cl1.throwexc('Undefined or null reference: require'):require)($$$cl1.String("express",7).valueOf());
    var app$5=express$4();
    app$5.get($$$cl1.String("/",1).valueOf(),$$$cl1.$JsCallable(hello,[{$nm:'req',$mt:'prm',$t:{t:Request}},{$nm:'res',$mt:'prm',$t:{t:Response}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Response},Element:{t:Response}}},First:{t:Request},Element:{ t:'u', l:[{t:Request},{t:Response}]}}},Return:{t:$$$cl1.Anything}}));
    app$5.listen((3000));
    /*End dynamic block*/
    $$$cl1.print($$$cl1.String("Listening on port 3000",22));
}
exports.run=run;
run.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.node',d:$$METAMODEL$$['ceylon.examples.basic.node']['run']};//run.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
