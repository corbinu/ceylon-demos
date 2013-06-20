"Run the module `ceylon.examples.basic.titanium`."
shared class Global() {
	shared Device device = Device();
	
	device.load();
}

shared class Device() {
	shared variable String osname = "Unknown";
	shared variable String version = "Unknown";
	shared variable Integer height = -1;
	shared variable Integer width = -1;
	shared variable String typeGeneral = "Unknown";
	shared variable String type = "Unknown";
	
	shared Boolean isTablet() => (osname == "ipad" || (osname == "android" && (height > 899 && width > 799)));
	
	shared Boolean isDroid() => (osname == "android");
    
	shared Boolean isIOS() => (osname == "iphone" || osname == "ipad");

	shared void load() {
		dynamic {
			osname = Ti.\iPlatform.osname;
			version = Ti.\iPlatform.version;
			height = Ti.\iPlatform.displayCaps.platformHeight;
			width = Ti.\iPlatform.displayCaps.platformWidth;
		}

		if (isIOS()) {
			typeGeneral = "ios";
			if (osname == "iphone" || osname == "ipod")
			{
				type = "iphone";
			}
			else
			{
				type = "ipad";
			}
		}
		else if (isDroid())
		{
			typeGeneral = "droidBig";
			if (isTablet())
			{
				type = "droidTablet";
			}
			else
			{
				if (height > 639 || width > 479)
				{
					type = "droidHigh";
				}
				else
				{
					typeGeneral = "droidSmall";
					if (height > 469 || width > 319)
					{
						type = "droidNormal";
					}
					else
					{
						type = "droidLow";
					}
				}
			}
		}
		else
		{
			typeGeneral = "unknown";
			type = "unknown";
		}

		if (type == "unknown")
		{
			dynamic {
				Ti.\iAPI.info("Could not determine device type");
			}
		}
		else
		{
			dynamic {
				Ti.\iAPI.info("Device type general " + type + " specifically " + typeGeneral);
			}
		}
	}
}

shared void run() {
	
	value global = Global();
	
    dynamic {
        if (Ti.version < 3.1)
		{
		  alert("Sorry - this application template requires Titanium Mobile SDK 3.1 or later. The current version is " + Ti.version);
		}
		
		if (global.device.type == "unknown")
		{
			alert("Could not determine device type");
		}
		else
		{
			alert("Device type general " + global.device.typeGeneral + " specifically " + global.device.type);
		}
    }
}