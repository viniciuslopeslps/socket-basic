var socket = io();

socket.on("connect", function(){ //envia o evento de conexao para o server (connections)
    console.log("Connected to socket.io server in frontend!");
});