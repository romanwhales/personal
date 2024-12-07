const http = require("http");

http.createServer(function(req,res){
	res.write("My name is Olawale, I am a Senior Software Engineer");
	res.end();
	
}).listen(3000);
console.log("Server started on port 3000");
