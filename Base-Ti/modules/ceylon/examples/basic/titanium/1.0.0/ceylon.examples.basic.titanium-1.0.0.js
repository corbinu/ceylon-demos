(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.titanium","$mod-version":"1.0.0","ceylon.examples.basic.titanium.application":{"$pkg-shared":"1","Device":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$m":{"isDroid":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDroid"},"isTablet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTablet"},"load":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"isIOS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isIOS"}},"$at":{"osname":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"osname"},"height":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"height"},"width":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"width"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"type"},"typeGeneral":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"typeGeneral"},"version":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"version"}},"$nm":"Device"},"Global":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$at":{"device":{"$t":{"$pk":"ceylon.examples.basic.titanium.application","$nm":"Device"},"$mt":"attr","$an":{"shared":[]},"$nm":"device"}},"$nm":"Global"}},"ceylon.examples.basic.titanium":{"$pkg-shared":"1","run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.basic.titanium`."]},"$nm":"run"}}};
var $$$cl6=require('ceylon/language/0.6/ceylon.language-0.6');

//MethodDefinition run at run.ceylon (1:0-20:0)
function run(){
    /*Begin dynamic block*/
    if((tmpvar$7=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).version,tmpvar$8=$$$cl6.Float(3.1),(tmpvar$7.compare&&tmpvar$7.compare(tmpvar$8).equals($$$cl6.getSmaller()))||tmpvar$7<tmpvar$8)){
        (typeof alert==='undefined'||alert===null?$$$cl6.throwexc('Undefined or null reference: alert'):alert)($$$cl6.String("Sorry - this application template requires Titanium Mobile SDK 3.1 or later. The current version is ",100).plus((typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).version));
    }if((tmpvar$9=(typeof global==='undefined'||global===null?$$$cl6.throwexc('Undefined or null reference: global'):global).device.getType(),tmpvar$10=$$$cl6.String("unknown",7),(tmpvar$9.equals&&tmpvar$9.equals(tmpvar$10))||tmpvar$9===tmpvar$10)){
        (typeof alert==='undefined'||alert===null?$$$cl6.throwexc('Undefined or null reference: alert'):alert)($$$cl6.String("Could not determine device type",31).valueOf());
    }else {
        (typeof alert==='undefined'||alert===null?$$$cl6.throwexc('Undefined or null reference: alert'):alert)($$$cl6.String("Device type general ",20).plus((typeof global==='undefined'||global===null?$$$cl6.throwexc('Undefined or null reference: global'):global).device.getTypeGeneral()).plus($$$cl6.String(" specifically ",14)).plus((typeof global==='undefined'||global===null?$$$cl6.throwexc('Undefined or null reference: global'):global).device.getType()));
    }/*End dynamic block*/
}
exports.run=run;
run.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Anything},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['run']};//run.$$targs$$={Arguments:{t:$$$cl6.Empty},Return:{t:$$$cl6.Anything}};

//ClassDefinition Global at global.ceylon (1:0-5:0)
function Global$application($$global){
    $init$Global$application();
    if ($$global===undefined)$$global=new Global$application.$$;
    
    //AttributeDeclaration device at global.ceylon (2:1-2:32)
    $$global.device$11_=/*anotaciones:ceylon.language::Shared,*/Device$application();
    $$global.device.load();
    return $$global;
}
Global$application.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl6.Basic},satisfies:[],pkg:'ceylon.examples.basic.titanium.application',d:$$METAMODEL$$['ceylon.examples.basic.titanium.application']['Global']};
function $init$Global$application(){
    if (Global$application.$$===undefined){
        $$$cl6.initTypeProto(Global$application,'ceylon.examples.basic.titanium.application::Global',$$$cl6.Basic);
        (function($$global){
            
            //AttributeDeclaration device at global.ceylon (2:1-2:32)
            $$$cl6.defineAttr($$global,'device',function(){return this.device$11_;});
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
    $$device.osname$12_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl6.String("Unknown",7);
    
    //AttributeDeclaration version at global.ceylon (9:1-9:43)
    $$device.version$13_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl6.String("Unknown",7);
    
    //AttributeDeclaration height at global.ceylon (10:1-10:36)
    $$device.height$14_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/(-(1));
    
    //AttributeDeclaration width at global.ceylon (11:1-11:35)
    $$device.width$15_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/(-(1));
    
    //AttributeDeclaration typeGeneral at global.ceylon (12:1-12:47)
    $$device.typeGeneral$16_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl6.String("Unknown",7);
    
    //AttributeDeclaration type at global.ceylon (13:1-13:40)
    $$device.type$17_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl6.String("Unknown",7);
    return $$device;
}
Device$application.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl6.Basic},satisfies:[],pkg:'ceylon.examples.basic.titanium.application',d:$$METAMODEL$$['ceylon.examples.basic.titanium.application']['Device']};
function $init$Device$application(){
    if (Device$application.$$===undefined){
        $$$cl6.initTypeProto(Device$application,'ceylon.examples.basic.titanium.application::Device',$$$cl6.Basic);
        (function($$device){
            
            //AttributeDeclaration osname at global.ceylon (8:1-8:42)
            $$$cl6.defineAttr($$device,'osname',function(){return this.osname$12_;},function(osname$18){return this.osname$12_=osname$18;});
            
            //AttributeDeclaration version at global.ceylon (9:1-9:43)
            $$$cl6.defineAttr($$device,'version',function(){return this.version$13_;},function(version$19){return this.version$13_=version$19;});
            
            //AttributeDeclaration height at global.ceylon (10:1-10:36)
            $$$cl6.defineAttr($$device,'height',function(){return this.height$14_;},function(height$20){return this.height$14_=height$20;});
            
            //AttributeDeclaration width at global.ceylon (11:1-11:35)
            $$$cl6.defineAttr($$device,'width',function(){return this.width$15_;},function(width$21){return this.width$15_=width$21;});
            
            //AttributeDeclaration typeGeneral at global.ceylon (12:1-12:47)
            $$$cl6.defineAttr($$device,'typeGeneral',function(){return this.typeGeneral$16_;},function(typeGeneral$22){return this.typeGeneral$16_=typeGeneral$22;});
            
            //AttributeDeclaration type at global.ceylon (13:1-13:40)
            $$$cl6.defineAttr($$device,'type',function(){return this.type$17_;},function(type$23){return this.type$17_=type$23;});
            
            //MethodDeclaration isTablet at global.ceylon (15:1-15:106)
            $$device.isTablet=function (){
                var $$device=this;
                return ($$device.osname.equals($$$cl6.String("ipad",4))||($$device.osname.equals($$$cl6.String("android",7))&&($$device.height.compare((899)).equals($$$cl6.getLarger())&&$$device.width.compare((799)).equals($$$cl6.getLarger()))));
            };
            $$device.isTablet.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Boolean},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium.application',d:$$METAMODEL$$['ceylon.examples.basic.titanium.application']['Device']['$m']['isTablet']};
            
            //MethodDeclaration isDroid at global.ceylon (17:1-17:50)
            $$device.isDroid=function (){
                var $$device=this;
                return $$device.osname.equals($$$cl6.String("android",7));
            };
            $$device.isDroid.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Boolean},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium.application',d:$$METAMODEL$$['ceylon.examples.basic.titanium.application']['Device']['$m']['isDroid']};
            
            //MethodDeclaration isIOS at global.ceylon (19:1-19:67)
            $$device.isIOS=function (){
                var $$device=this;
                return ($$device.osname.equals($$$cl6.String("iphone",6))||$$device.osname.equals($$$cl6.String("ipad",4)));
            };
            $$device.isIOS.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Boolean},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium.application',d:$$METAMODEL$$['ceylon.examples.basic.titanium.application']['Device']['$m']['isIOS']};
            
            //MethodDefinition load at global.ceylon (21:1-85:1)
            $$device.load=function load(){
                var $$device=this;
                /*Begin dynamic block*/
                $$device.osname=(tmpvar$24=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).Platform.osname,$$$cl6.isOfType(tmpvar$24,{t:$$$cl6.String})?tmpvar$24:$$$cl6.throwexc('dynamic objects cannot be used here'));$$device.version=(tmpvar$25=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).Platform.version,$$$cl6.isOfType(tmpvar$25,{t:$$$cl6.String})?tmpvar$25:$$$cl6.throwexc('dynamic objects cannot be used here'));$$device.height=(tmpvar$26=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).Platform.displayCaps.platformHeight,$$$cl6.isOfType(tmpvar$26,{t:$$$cl6.Integer})?tmpvar$26:$$$cl6.throwexc('dynamic objects cannot be used here'));$$device.width=(tmpvar$27=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).Platform.displayCaps.platformWidth,$$$cl6.isOfType(tmpvar$27,{t:$$$cl6.Integer})?tmpvar$27:$$$cl6.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
                if($$device.isIOS()){
                    $$device.typeGeneral=$$$cl6.String("ios",3);
                    if(($$device.osname.equals($$$cl6.String("iphone",6))||$$device.osname.equals($$$cl6.String("ipod",4)))){
                        $$device.type=$$$cl6.String("iphone",6);
                    }else {
                        $$device.type=$$$cl6.String("ipad",4);
                    }
                }else {
                    if($$device.isDroid()){
                        $$device.typeGeneral=$$$cl6.String("droidBig",8);
                        if($$device.isTablet()){
                            $$device.type=$$$cl6.String("droidTablet",11);
                        }else {
                            if(($$device.height.compare((639)).equals($$$cl6.getLarger())||$$device.width.compare((479)).equals($$$cl6.getLarger()))){
                                $$device.type=$$$cl6.String("droidHigh",9);
                            }else {
                                $$device.typeGeneral=$$$cl6.String("droidSmall",10);
                                if(($$device.height.compare((469)).equals($$$cl6.getLarger())||$$device.width.compare((319)).equals($$$cl6.getLarger()))){
                                    $$device.type=$$$cl6.String("droidNormal",11);
                                }else {
                                    $$device.type=$$$cl6.String("droidLow",8);
                                }
                            }
                        }
                    }else {
                        $$device.typeGeneral=$$$cl6.String("unknown",7);
                        $$device.type=$$$cl6.String("unknown",7);
                    }
                }
                if($$device.type.equals($$$cl6.String("unknown",7))){
                    /*Begin dynamic block*/
                    (typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).API.info($$$cl6.String("Could not determine device type",31).valueOf());
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    (typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).API.info($$$cl6.String("Device type general ",20).plus($$device.type).plus($$$cl6.String(" specifically ",14)).plus($$device.typeGeneral).valueOf());
                    /*End dynamic block*/
                }
            };$$device.load.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Anything},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium.application',d:$$METAMODEL$$['ceylon.examples.basic.titanium.application']['Device']['$m']['load']};
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
