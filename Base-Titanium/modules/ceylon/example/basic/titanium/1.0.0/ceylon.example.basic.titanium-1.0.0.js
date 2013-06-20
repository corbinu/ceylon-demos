(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.example.basic.titanium","$mod-version":"1.0.0","ceylon.example.basic.titanium.application":{"$pkg-shared":"1","Device":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$m":{"isDroid":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDroid"},"isTablet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTablet"},"load":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"isIOS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isIOS"}},"$at":{"osname":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"osname"},"height":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"height"},"width":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"width"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"type"},"typeGeneral":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"typeGeneral"},"version":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"version"}},"$nm":"Device"},"Global":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$at":{"device":{"$t":{"$pk":"ceylon.example.basic.titanium.application","$nm":"Device"},"$mt":"attr","$an":{"shared":[]},"$nm":"device"}},"$nm":"Global"}},"ceylon.example.basic.titanium":{"$pkg-shared":"1","run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.example.basic.titanium`."]},"$nm":"run"}}};
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
};run.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl7.Anything},$ps:[],pkg:'ceylon.example.basic.titanium',d:$$METAMODEL$$['ceylon.example.basic.titanium']['run']};//run.$$targs$$={Arguments:{t:$$$cl7.Empty},Return:{t:$$$cl7.Anything}};

//ClassDefinition Global at global.ceylon (1:0-5:0)
function Global$application($$global){
    $init$Global$application();
    if ($$global===undefined)$$global=new Global$application.$$;
    
    //AttributeDeclaration device at global.ceylon (2:1-2:32)
    $$global.device$12_=/*anotaciones:ceylon.language::Shared,*/Device$application();
    $$global.device.load();
    return $$global;
}
Global$application.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl7.Basic},satisfies:[],pkg:'ceylon.example.basic.titanium.application',d:$$METAMODEL$$['ceylon.example.basic.titanium.application']['Global']};
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

//ClassDefinition Device at global.ceylon (7:0-86:0)
function Device$application($$device){
    $init$Device$application();
    if ($$device===undefined)$$device=new Device$application.$$;
    
    //AttributeDeclaration osname at global.ceylon (8:1-8:42)
    $$device.osname$13_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl7.String("Unknown",7);
    
    //AttributeDeclaration version at global.ceylon (9:1-9:43)
    $$device.version$14_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl7.String("Unknown",7);
    
    //AttributeDeclaration height at global.ceylon (10:1-10:36)
    $$device.height$15_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/(-(1));
    
    //AttributeDeclaration width at global.ceylon (11:1-11:35)
    $$device.width$16_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/(-(1));
    
    //AttributeDeclaration typeGeneral at global.ceylon (12:1-12:47)
    $$device.typeGeneral$17_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl7.String("Unknown",7);
    
    //AttributeDeclaration type at global.ceylon (13:1-13:40)
    $$device.type$18_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl7.String("Unknown",7);
    return $$device;
}
Device$application.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl7.Basic},satisfies:[],pkg:'ceylon.example.basic.titanium.application',d:$$METAMODEL$$['ceylon.example.basic.titanium.application']['Device']};
function $init$Device$application(){
    if (Device$application.$$===undefined){
        $$$cl7.initTypeProto(Device$application,'ceylon.example.basic.titanium.application::Device',$$$cl7.Basic);
        (function($$device){
            
            //AttributeDeclaration osname at global.ceylon (8:1-8:42)
            $$$cl7.defineAttr($$device,'osname',function(){return this.osname$13_;},function(osname$19){return this.osname$13_=osname$19;});
            
            //AttributeDeclaration version at global.ceylon (9:1-9:43)
            $$$cl7.defineAttr($$device,'version',function(){return this.version$14_;},function(version$20){return this.version$14_=version$20;});
            
            //AttributeDeclaration height at global.ceylon (10:1-10:36)
            $$$cl7.defineAttr($$device,'height',function(){return this.height$15_;},function(height$21){return this.height$15_=height$21;});
            
            //AttributeDeclaration width at global.ceylon (11:1-11:35)
            $$$cl7.defineAttr($$device,'width',function(){return this.width$16_;},function(width$22){return this.width$16_=width$22;});
            
            //AttributeDeclaration typeGeneral at global.ceylon (12:1-12:47)
            $$$cl7.defineAttr($$device,'typeGeneral',function(){return this.typeGeneral$17_;},function(typeGeneral$23){return this.typeGeneral$17_=typeGeneral$23;});
            
            //AttributeDeclaration type at global.ceylon (13:1-13:40)
            $$$cl7.defineAttr($$device,'type',function(){return this.type$18_;},function(type$24){return this.type$18_=type$24;});
            
            //MethodDeclaration isTablet at global.ceylon (15:1-15:106)
            $$device.isTablet=function (){
                var $$device=this;
                return ($$device.osname.equals($$$cl7.String("ipad",4))||($$device.osname.equals($$$cl7.String("android",7))&&($$device.height.compare((899)).equals($$$cl7.getLarger())&&$$device.width.compare((799)).equals($$$cl7.getLarger()))));
            };
            $$device.isTablet.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl7.Boolean},$ps:[],$an:function(){return[$$$cl7.shared()];},pkg:'ceylon.example.basic.titanium.application',d:$$METAMODEL$$['ceylon.example.basic.titanium.application']['Device']['$m']['isTablet']};
            
            //MethodDeclaration isDroid at global.ceylon (17:1-17:50)
            $$device.isDroid=function (){
                var $$device=this;
                return $$device.osname.equals($$$cl7.String("android",7));
            };
            $$device.isDroid.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl7.Boolean},$ps:[],$an:function(){return[$$$cl7.shared()];},pkg:'ceylon.example.basic.titanium.application',d:$$METAMODEL$$['ceylon.example.basic.titanium.application']['Device']['$m']['isDroid']};
            
            //MethodDeclaration isIOS at global.ceylon (19:1-19:67)
            $$device.isIOS=function (){
                var $$device=this;
                return ($$device.osname.equals($$$cl7.String("iphone",6))||$$device.osname.equals($$$cl7.String("ipad",4)));
            };
            $$device.isIOS.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl7.Boolean},$ps:[],$an:function(){return[$$$cl7.shared()];},pkg:'ceylon.example.basic.titanium.application',d:$$METAMODEL$$['ceylon.example.basic.titanium.application']['Device']['$m']['isIOS']};
            
            //MethodDefinition load at global.ceylon (21:1-85:1)
            $$device.load=function load(){
                var $$device=this;
                /*Begin dynamic block*/
                $$device.osname=(tmpvar$25=(typeof Ti==='undefined'?$$$cl7.throwexc('Undefined type Ti'):Ti).Platform.osname,$$$cl7.isOfType(tmpvar$25,{t:$$$cl7.String})?tmpvar$25:$$$cl7.throwexc('dynamic objects cannot be used here'));$$device.version=(tmpvar$26=(typeof Ti==='undefined'?$$$cl7.throwexc('Undefined type Ti'):Ti).Platform.version,$$$cl7.isOfType(tmpvar$26,{t:$$$cl7.String})?tmpvar$26:$$$cl7.throwexc('dynamic objects cannot be used here'));$$device.height=(tmpvar$27=(typeof Ti==='undefined'?$$$cl7.throwexc('Undefined type Ti'):Ti).Platform.displayCaps.platformHeight,$$$cl7.isOfType(tmpvar$27,{t:$$$cl7.Integer})?tmpvar$27:$$$cl7.throwexc('dynamic objects cannot be used here'));$$device.width=(tmpvar$28=(typeof Ti==='undefined'?$$$cl7.throwexc('Undefined type Ti'):Ti).Platform.displayCaps.platformWidth,$$$cl7.isOfType(tmpvar$28,{t:$$$cl7.Integer})?tmpvar$28:$$$cl7.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
                if($$device.isIOS()){
                    $$device.typeGeneral=$$$cl7.String("ios",3);
                    if(($$device.osname.equals($$$cl7.String("iphone",6))||$$device.osname.equals($$$cl7.String("ipod",4)))){
                        $$device.type=$$$cl7.String("iphone",6);
                    }else {
                        $$device.type=$$$cl7.String("ipad",4);
                    }
                }else {
                    if($$device.isDroid()){
                        $$device.typeGeneral=$$$cl7.String("droidBig",8);
                        if($$device.isTablet()){
                            $$device.type=$$$cl7.String("droidTablet",11);
                        }else {
                            if(($$device.height.compare((639)).equals($$$cl7.getLarger())||$$device.width.compare((479)).equals($$$cl7.getLarger()))){
                                $$device.type=$$$cl7.String("droidHigh",9);
                            }else {
                                $$device.typeGeneral=$$$cl7.String("droidSmall",10);
                                if(($$device.height.compare((469)).equals($$$cl7.getLarger())||$$device.width.compare((319)).equals($$$cl7.getLarger()))){
                                    $$device.type=$$$cl7.String("droidNormal",11);
                                }else {
                                    $$device.type=$$$cl7.String("droidLow",8);
                                }
                            }
                        }
                    }else {
                        $$device.typeGeneral=$$$cl7.String("unknown",7);
                        $$device.type=$$$cl7.String("unknown",7);
                    }
                }
                if($$device.type.equals($$$cl7.String("unknown",7))){
                    /*Begin dynamic block*/
                    (typeof Ti==='undefined'?$$$cl7.throwexc('Undefined type Ti'):Ti).API.info($$$cl7.String("Could not determine device type",31).valueOf());
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    (typeof Ti==='undefined'?$$$cl7.throwexc('Undefined type Ti'):Ti).API.info($$$cl7.String("Device type general ",20).plus($$device.type).plus($$$cl7.String(" specifically ",14)).plus($$device.typeGeneral).valueOf());
                    /*End dynamic block*/
                }
            };$$device.load.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl7.Anything},$ps:[],$an:function(){return[$$$cl7.shared()];},pkg:'ceylon.example.basic.titanium.application',d:$$METAMODEL$$['ceylon.example.basic.titanium.application']['Device']['$m']['load']};
        })(Device$application.$$.prototype);
    }
    return Device$application;
}
exports.$init$Device$application=$init$Device$application;
$init$Device$application();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
