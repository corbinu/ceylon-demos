(function(define) { define(function(require, exports, module) {
//!!!METAMODEL:{"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.example.basic.titanium","$mod-version":"1.0.0","ceylon.example.basic.titanium.application":{"$pkg-shared":"1","Device":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$m":{"isDroid":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDroid"},"isTablet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTablet"},"isIOS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isIOS"}},"$nm":"Device"},"load":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"Global":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$at":{"device":{"$t":{"$pk":"ceylon.example.basic.titanium.application","$nm":"Device"},"$mt":"attr","$an":{"shared":[]},"$nm":"device"}},"$nm":"Global"}},"ceylon.example.basic.titanium":{"$pkg-shared":"1","run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.example.basic.titanium`."]},"$nm":"run"}}}
var $$$cl7=require('ceylon/language/0.6/ceylon.language-0.6');

//MethodDefinition run at run.ceylon (1:0-20:0)
function run(){
    /*Begin dynamic block*/
    if((tmpvar$8=(typeof Ti==='undefined'?$$$cl7.throwexc('Undefined type Ti'):Ti).version,tmpvar$9=$$$cl7.Float(3.1),(tmpvar$8.compare&&tmpvar$8.compare(tmpvar$9).equals($$$cl7.getSmaller()))||tmpvar$8<tmpvar$9)){
        (typeof alert==='undefined'||alert===null?$$$cl7.throwexc('Undefined or null reference: alert'):alert)($$$cl7.String("Sorry - this application template requires Titanium Mobile SDK 3.1 or later. The current version is ",100).plus((typeof Ti==='undefined'?$$$cl7.throwexc('Undefined type Ti'):Ti).version));
    }if((tmpvar$10=(typeof global==='undefined'||global===null?$$$cl7.throwexc('Undefined or null reference: global'):global).device.getType(),tmpvar$11=$$$cl7.String("unknown",7),(tmpvar$10.equals&&tmpvar$10.equals(tmpvar$11))||tmpvar$10===tmpvar$11)){
        (typeof alert==='undefined'||alert===null?$$$cl7.throwexc('Undefined or null reference: alert'):alert)($$$cl7.String("Could not determine device type",31).valueOf());
    }else {
        (typeof alert==='undefined'||alert===null?$$$cl7.throwexc('Undefined or null reference: alert'):alert)($$$cl7.String("Device type general ",20).plus((typeof global==='undefined'||global===null?$$$cl7.throwexc('Undefined or null reference: global'):global).device.getTypeGeneral()).plus($$$cl7.String(" specifically ",14)).plus((typeof global==='undefined'||global===null?$$$cl7.throwexc('Undefined or null reference: global'):global).device.getType()));
    }/*End dynamic block*/
};run.$$metamodel$$={$nm:'run',$mt:'mthd',$t:{t:$$$cl7.Anything},$ps:[]};//run.$$targs$$={Arguments:{t:$$$cl7.Empty},Return:{t:$$$cl7.Anything}};

//ClassDefinition Global at global.ceylon (1:0-5:0)
function Global$application($$global){
    $init$Global$application();
    if ($$global===undefined)$$global=new Global$application.$$;
    
    //AttributeDeclaration device at global.ceylon (2:1-2:32)
    $$global.device$12_=/*anotaciones:ceylon.language::Shared,*/Device$application();
();
    return $$global;
}
Global$application.$$metamodel$$={$nm:'Global',$mt:'cls','super':{t:$$$cl7.Basic},satisfies:[]};
function $init$Global$application(){
    if (Global$application.$$===undefined){
        $$$cl7.initTypeProto(Global$application,'ceylon.example.basic.titanium.application::Global',$$$cl7.Basic);
        (function($$global){
            
            //AttributeDeclaration device at global.ceylon (2:1-2:32)
            $$$cl7.defineAttr($$global,'device',function(){return this.device$12_;});
        })(Global$application.$$.prototype);
    }
    return Global$application;
}
exports.$init$Global$application=$init$Global$application;
$init$Global$application();

//ClassDefinition Device at global.ceylon (7:0-20:1)
function Device$application($$device){
    $init$Device$application();
    if ($$device===undefined)$$device=new Device$application.$$;
    
    //AttributeDeclaration osname at global.ceylon (8:1-8:23)
    
    //AttributeDeclaration version at global.ceylon (9:1-9:24)
    
    //AttributeDeclaration height at global.ceylon (10:1-10:24)
    
    //AttributeDeclaration width at global.ceylon (11:1-11:23)
    
    //AttributeDeclaration typeGeneral at global.ceylon (12:1-12:28)
    
    //AttributeDeclaration type at global.ceylon (13:1-13:21)
    return $$device;
}
Device$application.$$metamodel$$={$nm:'Device',$mt:'cls','super':{t:$$$cl7.Basic},satisfies:[]};
function $init$Device$application(){
    if (Device$application.$$===undefined){
        $$$cl7.initTypeProto(Device$application,'ceylon.example.basic.titanium.application::Device',$$$cl7.Basic);
        (function($$device){
            
            //AttributeDeclaration osname at global.ceylon (8:1-8:23)
            $$$cl7.defineAttr($$device,'osname$13',function(){return this.osname$13_;},function(osname$14){return this.osname$13_=osname$14;});
            
            //AttributeDeclaration version at global.ceylon (9:1-9:24)
            $$$cl7.defineAttr($$device,'version$15',function(){return this.version$15_;},function(version$16){return this.version$15_=version$16;});
            
            //AttributeDeclaration height at global.ceylon (10:1-10:24)
            $$$cl7.defineAttr($$device,'height$17',function(){return this.height$17_;},function(height$18){return this.height$17_=height$18;});
            
            //AttributeDeclaration width at global.ceylon (11:1-11:23)
            $$$cl7.defineAttr($$device,'width$19',function(){return this.width$19_;},function(width$20){return this.width$19_=width$20;});
            
            //AttributeDeclaration typeGeneral at global.ceylon (12:1-12:28)
            $$$cl7.defineAttr($$device,'typeGeneral$21',function(){return this.typeGeneral$21_;},function(typeGeneral$22){return this.typeGeneral$21_=typeGeneral$22;});
            
            //AttributeDeclaration type at global.ceylon (13:1-13:21)
            $$$cl7.defineAttr($$device,'type$23',function(){return this.type$23_;},function(type$24){return this.type$23_=type$24;});
            
            //MethodDeclaration isTablet at global.ceylon (15:1-15:106)
            $$device.isTablet=function (){
                var $$device=this;
                return (.equals($$$cl7.String("ipad",4))||(.equals($$$cl7.String("android",7))&&(.compare((899)).equals($$$cl7.getLarger())&&.compare((799)).equals($$$cl7.getLarger()))));
            };
            $$device.isTablet.$$metamodel$$={$nm:'isTablet',$mt:'mthd',$t:{t:$$$cl7.Boolean},$ps:[],$an:function(){return[$$$cl7.shared()];}};
            
            //MethodDeclaration isDroid at global.ceylon (17:1-17:50)
            $$device.isDroid=function (){
                var $$device=this;
                return .equals($$$cl7.String("android",7));
            };
            $$device.isDroid.$$metamodel$$={$nm:'isDroid',$mt:'mthd',$t:{t:$$$cl7.Boolean},$ps:[],$an:function(){return[$$$cl7.shared()];}};
            
            //MethodDeclaration isIOS at global.ceylon (19:1-19:67)
            $$device.isIOS=function (){
                var $$device=this;
                return (.equals($$$cl7.String("iphone",6))||.equals($$$cl7.String("ipad",4)));
            };
            $$device.isIOS.$$metamodel$$={$nm:'isIOS',$mt:'mthd',$t:{t:$$$cl7.Boolean},$ps:[],$an:function(){return[$$$cl7.shared()];}};
        })(Device$application.$$.prototype);
    }
    return Device$application;
}
exports.$init$Device$application=$init$Device$application;
$init$Device$application();

//MethodDefinition load at global.ceylon (22:1-80:1)
function load$application(){
    if(()){
        if((.equals($$$cl7.String("iphone",6))||.equals($$$cl7.String("ipod",4)))){
        }else {
        }
    }else {
        if(()){
            if(()){
            }else {
                if((.compare((639)).equals($$$cl7.getLarger())||.compare((479)).equals($$$cl7.getLarger()))){
                }else {
                    if((.compare((469)).equals($$$cl7.getLarger())||.compare((319)).equals($$$cl7.getLarger()))){
                    }else {
                    }
                }
            }
        }else {
        }
    }
    if(.equals($$$cl7.String("unknown",7))){
($$$cl7.String("Could not determine device type",31).valueOf());
    }else {
($$$cl7.String("Device type general ",20).plus().plus($$$cl7.String(" specifically ",14)).plus());
    }
}
exports.load$application=load$application;
load$application.$$metamodel$$={$nm:'load',$mt:'mthd',$t:{t:$$$cl7.Anything},$ps:[],$an:function(){return[$$$cl7.shared()];}};//load$application.$$targs$$={Arguments:{t:$$$cl7.Empty},Return:{t:$$$cl7.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
