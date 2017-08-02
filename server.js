var PORT = process.env.PORT | 3000;
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http); //funciona como o app
var moment = require("moment");

app.use(express.static(__dirname + "/public"));

// on = permite você escultar por eventos
io.on("connection", function(socket){ //esculta o evendo de get connection do client (app.js)
	console.log("User connected in backend via socket.io");
    
    socket.on("message", function(message){
        console.log("Message received: " + message.text);
        message.timestamp = moment().valueOf();
        io.emit("message", message); //enviamos para todos os browsers conectador com essse servidor
    });
    
    //coloca o que voce quer emitir para quem está escultando o server
    socket.emit("message", {
        text: "Welcome to the chat application!",
        timestamp: moment().valueOf()
    }); 
}); 

app.get("/", function(req, res){
	res.render("index.html");
});

http.listen(PORT, function(){
	console.log("Server running at: " + PORT);
});
