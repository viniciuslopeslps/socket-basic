var socket = io();
var name = getQueryVariable("name") || "Anonymous";
var room = getQueryVariable("room");

socket.on("connect", function(){ //envia o evento de conexao para o server (connections)
    console.log("Connected to socket.io server in frontend!");

    socket.emit("joinRoom",{
    	name: name,
    	room: room
    });
});

socket.on("message", function(message){
    console.log("new message in frontend: " + message.text);
    var momentTimestamp = moment.utc(message.timestamp);
    $message = $(".message");
    $message.append("<p><strong>" + momentTimestamp.format("h:mm a") + " - " + message.name + "</strong></p>");
    $message.append("<p> " + message.text + " </p>");
});



$(".room-title").text(room);

//recebe evendo de submit de mensagem
var $form = jQuery("#message-form");

$form.on("submit", function(event){
	event.preventDefault();

	var $message = $form.find("input[name=message]");
	socket.emit("message", {
		text: $message.val(),
		name: name
	});
});