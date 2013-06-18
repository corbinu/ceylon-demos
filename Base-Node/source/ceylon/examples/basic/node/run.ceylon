"Run the module `ceylon.examples.basic.node`."
shared void run() {
	dynamic { 
	    value express = require("express"); 
	    value app = express();
	    app.get("/", hello);
		app.listen(3000);
	}

	print("Listening on port 3000");
}