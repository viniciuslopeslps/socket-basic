var socket = io();

socket.on("connect", function(){ //envia o evento de conexao para o server (connections)
    console.log("Connected to socket.io server in frontend!");
});

socket.on("message", function(message){
    console.log("new message in frontend: " + message.text);
    
    $(".message").append("<p>" + message.text + "</p>");
});


//recebe evendo de submit de mensagem
var $form = jQuery("#message-form");

$form.on("submit", function(event){
	event.preventDefault();
	var $message = $form.find("input[name=message]");
	socket.emit("message", {
		text: $message.val()
	});
});