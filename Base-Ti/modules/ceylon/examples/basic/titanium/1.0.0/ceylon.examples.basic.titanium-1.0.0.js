(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.basic.titanium","$mod-version":"1.0.0","ceylon.examples.basic.titanium":{"$pkg-shared":"1","Device":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[]},"$m":{"isDroid":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDroid"},"isTablet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTablet"},"load":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"isIOS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isIOS"}},"$at":{"osname":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"osname"},"height":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"height"},"width":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"width"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"type"},"typeGeneral":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"typeGeneral"},"version":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"version"}},"$nm":"Device"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"run"},"Global":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[],"doc":["Run the module `ceylon.examples.basic.titanium`."]},"$at":{"device":{"$t":{"$pk":"ceylon.examples.basic.titanium","$nm":"Device"},"$mt":"attr","$an":{"shared":[]},"$nm":"device"}},"$nm":"Global"}}};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function Global($$global){
    $init$Global();
    if ($$global===undefined)$$global=new Global.$$;
    var device=Device();
    $$$cl1.defineAttr($$global,'device',function(){return device;});
    $$global.device.load();
    return $$global;
}
Global.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Global']};
exports.Global=Global;
function $init$Global(){
    if (Global.$$===undefined){
        $$$cl1.initTypeProto(Global,'ceylon.examples.basic.titanium::Global',$$$cl1.Basic);
    }
    return Global;
}
exports.$init$Global=$init$Global;
$init$Global();
function Device($$device){
    $init$Device();
    if ($$device===undefined)$$device=new Device.$$;
    var osname=$$$cl1.String("Unknown",7);
    $$$cl1.defineAttr($$device,'osname',function(){return osname;},function(osname$2){return osname=osname$2;});
    var version=$$$cl1.String("Unknown",7);
    $$$cl1.defineAttr($$device,'version',function(){return version;},function(version$3){return version=version$3;});
    var height=(-(1));
    $$$cl1.defineAttr($$device,'height',function(){return height;},function(height$4){return height=height$4;});
    var width=(-(1));
    $$$cl1.defineAttr($$device,'width',function(){return width;},function(width$5){return width=width$5;});
    var typeGeneral=$$$cl1.String("Unknown",7);
    $$$cl1.defineAttr($$device,'typeGeneral',function(){return typeGeneral;},function(typeGeneral$6){return typeGeneral=typeGeneral$6;});
    var type=$$$cl1.String("Unknown",7);
    $$$cl1.defineAttr($$device,'type',function(){return type;},function(type$7){return type=type$7;});
    var isTablet=function (){
        return ($$device.osname.equals($$$cl1.String("ipad",4))||($$device.osname.equals($$$cl1.String("android",7))&&($$device.height.compare((899)).equals($$$cl1.getLarger())&&$$device.width.compare((799)).equals($$$cl1.getLarger()))));
    };
    isTablet.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']['$m']['isTablet']};
    $$device.isTablet=isTablet;
    var isDroid=function (){
        return $$device.osname.equals($$$cl1.String("android",7));
    };
    isDroid.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']['$m']['isDroid']};
    $$device.isDroid=isDroid;
    var isIOS=function (){
        return ($$device.osname.equals($$$cl1.String("iphone",6))||$$device.osname.equals($$$cl1.String("ipad",4)));
    };
    isIOS.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']['$m']['isIOS']};
    $$device.isIOS=isIOS;
    function load(){
        /*Begin dynamic block*/
        $$device.osname=(tmpvar$8=(typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).Platform.osname,$$$cl1.isOfType(tmpvar$8,{t:$$$cl1.String})?tmpvar$8:$$$cl1.throwexc('dynamic objects cannot be used here'));$$device.version=(tmpvar$9=(typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).Platform.version,$$$cl1.isOfType(tmpvar$9,{t:$$$cl1.String})?tmpvar$9:$$$cl1.throwexc('dynamic objects cannot be used here'));$$device.height=(tmpvar$10=(typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).Platform.displayCaps.platformHeight,$$$cl1.isOfType(tmpvar$10,{t:$$$cl1.Integer})?tmpvar$10:$$$cl1.throwexc('dynamic objects cannot be used here'));$$device.width=(tmpvar$11=(typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).Platform.displayCaps.platformWidth,$$$cl1.isOfType(tmpvar$11,{t:$$$cl1.Integer})?tmpvar$11:$$$cl1.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
        if($$device.isIOS()){
            $$device.typeGeneral=$$$cl1.String("ios",3);
            if(($$device.osname.equals($$$cl1.String("iphone",6))||$$device.osname.equals($$$cl1.String("ipod",4)))){
                $$device.type=$$$cl1.String("iphone",6);
            }else {
                $$device.type=$$$cl1.String("ipad",4);
            }
        }else {
            if($$device.isDroid()){
                $$device.typeGeneral=$$$cl1.String("droidBig",8);
                if($$device.isTablet()){
                    $$device.type=$$$cl1.String("droidTablet",11);
                }else {
                    if(($$device.height.compare((639)).equals($$$cl1.getLarger())||$$device.width.compare((479)).equals($$$cl1.getLarger()))){
                        $$device.type=$$$cl1.String("droidHigh",9);
                    }else {
                        $$device.typeGeneral=$$$cl1.String("droidSmall",10);
                        if(($$device.height.compare((469)).equals($$$cl1.getLarger())||$$device.width.compare((319)).equals($$$cl1.getLarger()))){
                            $$device.type=$$$cl1.String("droidNormal",11);
                        }else {
                            $$device.type=$$$cl1.String("droidLow",8);
                        }
                    }
                }
            }else {
                $$device.typeGeneral=$$$cl1.String("unknown",7);
                $$device.type=$$$cl1.String("unknown",7);
            }
        }
        if($$device.type.equals($$$cl1.String("unknown",7))){
            /*Begin dynamic block*/
            (typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).API.info($$$cl1.String("Could not determine device type",31).valueOf());
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            (typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).API.info($$$cl1.String("Device type general ",20).plus($$device.type).plus($$$cl1.String(" specifically ",14)).plus($$device.typeGeneral).valueOf());
            /*End dynamic block*/
        }
    }
    $$device.load=load;
    load.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']['$m']['load']};//load.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    return $$device;
}
Device.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['Device']};
exports.Device=Device;
function $init$Device(){
    if (Device.$$===undefined){
        $$$cl1.initTypeProto(Device,'ceylon.examples.basic.titanium::Device',$$$cl1.Basic);
    }
    return Device;
}
exports.$init$Device=$init$Device;
$init$Device();
function run(){
    var global$12=Global();
    /*Begin dynamic block*/
    if((tmpvar$13=(typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).version,tmpvar$14=$$$cl1.Float(3.1),(tmpvar$13.compare&&tmpvar$13.compare(tmpvar$14).equals($$$cl1.getSmaller()))||tmpvar$13<tmpvar$14)){
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Sorry - this application template requires Titanium Mobile SDK 3.1 or later. The current version is ",100).plus((typeof Ti==='undefined'?$$$cl1.throwexc('Undefined type Ti'):Ti).version));
    }if(global$12.device.type.equals($$$cl1.String("unknown",7))){
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Could not determine device type",31).valueOf());
    }else {
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Device type general ",20).plus(global$12.device.typeGeneral).plus($$$cl1.String(" specifically ",14)).plus(global$12.device.type).valueOf());
    }/*End dynamic block*/
}
exports.run=run;
run.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.basic.titanium',d:$$METAMODEL$$['ceylon.examples.basic.titanium']['run']};//run.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
