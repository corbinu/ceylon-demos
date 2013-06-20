"Run the module `ceylon.example.basic.titanium`."
void run() {
    dynamic {
        if (Ti.version < 3.1)
		{
		  alert("Sorry - this application template requires Titanium Mobile SDK 3.1 or later. The current version is " + Ti.version);
		}
		
		global = Global();
		
		if (global.device.getType() == "unknown")
		{
			alert("Could not determine device type");
		}
		else
		{
			alert("Device type general " + global.device.getTypeGeneral() + " specifically " + global.device.getType());
		}
    }
}