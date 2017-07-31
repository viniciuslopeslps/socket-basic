var PORT = process.env.PORT | 3000;
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http); //funciona como o app

app.use(express.static(__dirname + "/public"));

// on = permite você escultar por eventos
io.on("connection", function(){ //esculta o evendo de get connection do client (app.js)
	console.log("User connected in backend via socket.io");
}); 

app.get("/", function(req, res){
	res.render("index.html");
});

http.listen(PORT, function(){
	console.log("Server running at: " + PORT);
});
