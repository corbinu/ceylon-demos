shared void nativejs() {  }

shared nativejs interface Express {
	shared formal Application createApplication();
}

shared nativejs interface Request {
	
}

shared nativejs interface Response {
	shared formal void send(String response);
}

shared nativejs interface Application {
	
	shared formal void get(String route, void handle(Request req, Response res));
	shared formal void listen(Integer port);	
}