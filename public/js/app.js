var socket = io();

socket.on("connect", function(){ //envia o evento de conexao para o server (connections)
    console.log("Connected to socket.io server in frontend!");
});

socket.on("message", function(message){
    console.log("Receving data in frontend: " + message.text);
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