var PORT = process.env.PORT | 3000;
var express = require("express");
var app = express();
var http = require("http").Server(app);


app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("index.html");
});

http.listen(PORT, function(){
	console.log("Server running at: " + PORT);
});
