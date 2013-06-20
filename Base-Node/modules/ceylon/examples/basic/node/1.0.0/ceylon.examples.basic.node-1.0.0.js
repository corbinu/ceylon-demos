(function(define) { define(function(require, exports, module) {
//!!!METAMODEL:{"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.node","ceylon.examples.basic.node":{"hello":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Request"},"$mt":"prm","$pt":"v","$nm":"req"},{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Response"},"$mt":"prm","$pt":"v","$nm":"res"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hello"},"$pkg-shared":"1","Application":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$m":{"get":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"route"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Request"},"$mt":"prm","$pt":"v","$nm":"req"},{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Response"},"$mt":"prm","$pt":"v","$nm":"res"}]],"$mt":"prm","$pt":"f","$nm":"handle"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"get"},"listen":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"port"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"listen"}},"$nm":"Application"},"Response":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$m":{"send":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"response"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"send"}},"$nm":"Response"},"Express":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$m":{"createApplication":{"$t":{"$pk":"ceylon.examples.basic.node","$nm":"Application"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createApplication"}},"$nm":"Express"},"Request":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$nm":"Request"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.basic.node`."]},"$nm":"run"},"nativejs":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nativejs"}},"$mod-version":"1.0.0"}
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');

//MethodDefinition run at run.ceylon (1:0-11:0)
function run(){
    /*Begin dynamic block*/
    
    //AttributeDeclaration express at run.ceylon (4:5-4:39)
    var express$2=(typeof require==='undefined'||require===null?$$$cl1.throwexc('Undefined or null reference: require'):require)($$$cl1.String("express",7).valueOf());
    
    //AttributeDeclaration app at run.ceylon (5:5-5:26)
    var app$3=express$2();
    app$3.get($$$cl1.String("/",1).valueOf(),$$$cl1.$JsCallable(hello,[{$nm:'req',$mt:'prm',$t:{t:Request}},{$nm:'res',$mt:'prm',$t:{t:Response}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Response},Element:{t:Response}}},First:{t:Request},Element:{ t:'u', l:[{t:Request},{t:Response}]}}},Return:{t:$$$cl1.Anything}}));
    app$3.listen((3000));
    /*End dynamic block*/
    $$$cl1.print($$$cl1.String("Listening on port 3000",22));
}
exports.run=run;
run.$$metamodel$$={$nm:'run',$mt:'mthd',$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];}};//run.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};

//MethodDefinition hello at routes.ceylon (1:0-4:0)
function hello(req$4,res$5){
    res$5.send($$$cl1.String("Hello, World!!!",15).valueOf());
}
exports.hello=hello;
hello.$$metamodel$$={$nm:'hello',$mt:'mthd',$t:{t:$$$cl1.Anything},$ps:[{$nm:'req',$mt:'prm',$t:{t:Request}},{$nm:'res',$mt:'prm',$t:{t:Response}}],$an:function(){return[$$$cl1.shared()];}};//hello.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Response},Element:{t:Response}}},Return:{t:$$$cl1.Anything}};

//MethodDefinition nativejs at express.ceylon (1:0-1:26)
function nativejs(){
}
exports.nativejs=nativejs;
nativejs.$$metamodel$$={$nm:'nativejs',$mt:'mthd',$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];}};//nativejs.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};

//InterfaceDefinition Express at express.ceylon (3:0-5:0)
function Express($$express){
}
Express.$$metamodel$$={$nm:'Express',$mt:'ifc',satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];}};
exports.Express=Express;
function $init$Express(){
    if (Express.$$===undefined){
        $$$cl1.initTypeProto(Express,'ceylon.examples.basic.node::Express');
        (function($$express){
        })(Express.$$.prototype);
    }
    return Express;
}
exports.$init$Express=$init$Express;
$init$Express();

//InterfaceDefinition Request at express.ceylon (7:0-9:0)
function Request($$request){
}
Request.$$metamodel$$={$nm:'Request',$mt:'ifc',satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];}};
exports.Request=Request;
function $init$Request(){
    if (Request.$$===undefined){
        $$$cl1.initTypeProto(Request,'ceylon.examples.basic.node::Request');
    }
    return Request;
}
exports.$init$Request=$init$Request;
$init$Request();

//InterfaceDefinition Response at express.ceylon (11:0-13:0)
function Response($$response){
}
Response.$$metamodel$$={$nm:'Response',$mt:'ifc',satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];}};
exports.Response=Response;
function $init$Response(){
    if (Response.$$===undefined){
        $$$cl1.initTypeProto(Response,'ceylon.examples.basic.node::Response');
        (function($$response){
        })(Response.$$.prototype);
    }
    return Response;
}
exports.$init$Response=$init$Response;
$init$Response();

//InterfaceDefinition Application at express.ceylon (15:0-19:0)
function Application($$application){
}
Application.$$metamodel$$={$nm:'Application',$mt:'ifc',satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];}};
exports.Application=Application;
function $init$Application(){
    if (Application.$$===undefined){
        $$$cl1.initTypeProto(Application,'ceylon.examples.basic.node::Application');
        (function($$application){
        })(Application.$$.prototype);
    }
    return Application;
}
exports.$init$Application=$init$Application;
$init$Application();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
