(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.titanium","$mod-version":"1.0.0","ceylon.examples.basic.titanium":{"$pkg-shared":"1","Device":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[]},"$m":{"isDroid":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDroid"},"isTablet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTablet"},"load":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"isIOS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isIOS"}},"$at":{"osname":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"osname"},"height":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"height"},"width":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"width"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"type"},"typeGeneral":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"typeGeneral"},"version":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"version"}},"$nm":"Device"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"run"},"Global":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[],"doc":["Run the module `ceylon.examples.basic.titanium`."]},"$at":{"device":{"$t":{"$pk":"ceylon.examples.basic.titanium","$nm":"Device"},"$mt":"attr","$an":{"shared":[]},"$nm":"device"}},"$nm":"Global"}}};
var $$$cl6=require('ceylon/language/0.6/ceylon.language-0.6');

//ClassDefinition Global at run.ceylon (1:0-6:0)
function Global($$global){
    $init$Global();
    if ($$global===undefined)$$global=new Global.$$;
    
    //AttributeDeclaration device at run.ceylon (3:1-3:32)
    $$global.device$7_=/*anotaciones:ceylon.language::Shared,*/Device();
    $$global.device.load();
    return $$global;
}
Global.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl6.Basic},satisfies:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Global']};
exports.Global=Global;
function $init$Global(){
    if (Global.$$===undefined){
        $$$cl6.initTypeProto(Global,'ceylon.examples.basic.titanium::Global',$$$cl6.Basic);
        (function($$global){
            
            //AttributeDeclaration device at run.ceylon (3:1-3:32)
            $$$cl6.defineAttr($$global,'device',function(){return this.device$7_;});
        })(Global.$$.prototype);
    }
    return Global;
}
exports.$init$Global=$init$Global;
$init$Global();

//ClassDefinition Device at run.ceylon (8:0-87:0)
function Device($$device){
    $init$Device();
    if ($$device===undefined)$$device=new Device.$$;
    
    //AttributeDeclaration osname at run.ceylon (9:1-9:42)
    $$device.osname$8_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl6.String("Unknown",7);
    
    //AttributeDeclaration version at run.ceylon (10:1-10:43)
    $$device.version$9_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl6.String("Unknown",7);
    
    //AttributeDeclaration height at run.ceylon (11:1-11:36)
    $$device.height$10_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/(-(1));
    
    //AttributeDeclaration width at run.ceylon (12:1-12:35)
    $$device.width$11_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/(-(1));
    
    //AttributeDeclaration typeGeneral at run.ceylon (13:1-13:47)
    $$device.typeGeneral$12_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl6.String("Unknown",7);
    
    //AttributeDeclaration type at run.ceylon (14:1-14:40)
    $$device.type$13_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl6.String("Unknown",7);
    return $$device;
}
Device.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl6.Basic},satisfies:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']};
exports.Device=Device;
function $init$Device(){
    if (Device.$$===undefined){
        $$$cl6.initTypeProto(Device,'ceylon.examples.basic.titanium::Device',$$$cl6.Basic);
        (function($$device){
            
            //AttributeDeclaration osname at run.ceylon (9:1-9:42)
            $$$cl6.defineAttr($$device,'osname',function(){return this.osname$8_;},function(osname$14){return this.osname$8_=osname$14;});
            
            //AttributeDeclaration version at run.ceylon (10:1-10:43)
            $$$cl6.defineAttr($$device,'version',function(){return this.version$9_;},function(version$15){return this.version$9_=version$15;});
            
            //AttributeDeclaration height at run.ceylon (11:1-11:36)
            $$$cl6.defineAttr($$device,'height',function(){return this.height$10_;},function(height$16){return this.height$10_=height$16;});
            
            //AttributeDeclaration width at run.ceylon (12:1-12:35)
            $$$cl6.defineAttr($$device,'width',function(){return this.width$11_;},function(width$17){return this.width$11_=width$17;});
            
            //AttributeDeclaration typeGeneral at run.ceylon (13:1-13:47)
            $$$cl6.defineAttr($$device,'typeGeneral',function(){return this.typeGeneral$12_;},function(typeGeneral$18){return this.typeGeneral$12_=typeGeneral$18;});
            
            //AttributeDeclaration type at run.ceylon (14:1-14:40)
            $$$cl6.defineAttr($$device,'type',function(){return this.type$13_;},function(type$19){return this.type$13_=type$19;});
            
            //MethodDeclaration isTablet at run.ceylon (16:1-16:106)
            $$device.isTablet=function (){
                var $$device=this;
                return ($$device.osname.equals($$$cl6.String("ipad",4))||($$device.osname.equals($$$cl6.String("android",7))&&($$device.height.compare((899)).equals($$$cl6.getLarger())&&$$device.width.compare((799)).equals($$$cl6.getLarger()))));
            };
            $$device.isTablet.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Boolean},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']['$m']['isTablet']};
            
            //MethodDeclaration isDroid at run.ceylon (18:1-18:50)
            $$device.isDroid=function (){
                var $$device=this;
                return $$device.osname.equals($$$cl6.String("android",7));
            };
            $$device.isDroid.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Boolean},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']['$m']['isDroid']};
            
            //MethodDeclaration isIOS at run.ceylon (20:1-20:67)
            $$device.isIOS=function (){
                var $$device=this;
                return ($$device.osname.equals($$$cl6.String("iphone",6))||$$device.osname.equals($$$cl6.String("ipad",4)));
            };
            $$device.isIOS.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Boolean},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']['$m']['isIOS']};
            
            //MethodDefinition load at run.ceylon (22:1-86:1)
            $$device.load=function load(){
                var $$device=this;
                /*Begin dynamic block*/
                $$device.osname=(tmpvar$20=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).Platform.osname,$$$cl6.isOfType(tmpvar$20,{t:$$$cl6.String})?tmpvar$20:$$$cl6.throwexc('dynamic objects cannot be used here'));$$device.version=(tmpvar$21=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).Platform.version,$$$cl6.isOfType(tmpvar$21,{t:$$$cl6.String})?tmpvar$21:$$$cl6.throwexc('dynamic objects cannot be used here'));$$device.height=(tmpvar$22=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).Platform.displayCaps.platformHeight,$$$cl6.isOfType(tmpvar$22,{t:$$$cl6.Integer})?tmpvar$22:$$$cl6.throwexc('dynamic objects cannot be used here'));$$device.width=(tmpvar$23=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).Platform.displayCaps.platformWidth,$$$cl6.isOfType(tmpvar$23,{t:$$$cl6.Integer})?tmpvar$23:$$$cl6.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
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
            };$$device.load.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Anything},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']['$m']['load']};
        })(Device.$$.prototype);
    }
    return Device;
}
exports.$init$Device=$init$Device;
$init$Device();

//MethodDefinition run at run.ceylon (89:0-108:0)
function run(){
    
    //AttributeDeclaration global at run.ceylon (91:1-91:24)
    var global$24=Global();
    /*Begin dynamic block*/
    if((tmpvar$25=(typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).version,tmpvar$26=$$$cl6.Float(3.1),(tmpvar$25.compare&&tmpvar$25.compare(tmpvar$26).equals($$$cl6.getSmaller()))||tmpvar$25<tmpvar$26)){
        (typeof alert==='undefined'||alert===null?$$$cl6.throwexc('Undefined or null reference: alert'):alert)($$$cl6.String("Sorry - this application template requires Titanium Mobile SDK 3.1 or later. The current version is ",100).plus((typeof Ti==='undefined'?$$$cl6.throwexc('Undefined type Ti'):Ti).version));
    }if(global$24.device.type.equals($$$cl6.String("unknown",7))){
        (typeof alert==='undefined'||alert===null?$$$cl6.throwexc('Undefined or null reference: alert'):alert)($$$cl6.String("Could not determine device type",31).valueOf());
    }else {
        (typeof alert==='undefined'||alert===null?$$$cl6.throwexc('Undefined or null reference: alert'):alert)($$$cl6.String("Device type general ",20).plus(global$24.device.typeGeneral).plus($$$cl6.String(" specifically ",14)).plus(global$24.device.type).valueOf());
    }/*End dynamic block*/
}
exports.run=run;
run.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl6.Anything},$ps:[],$an:function(){return[$$$cl6.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['run']};//run.$$targs$$={Arguments:{t:$$$cl6.Empty},Return:{t:$$$cl6.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
