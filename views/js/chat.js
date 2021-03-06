window.onload = function() {

    var messages = [];
	var announce = [];
    var socket = io.connect('http://express.dev:3000');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
	var name = document.getElementById("name");

    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
            }
            content.innerHTML = html;
			content.scrollTop = content.scrollHeight;
        } else {
            console.log("There is a problem:", data);
        }
    });
	
    socket.on('connectToRoom', function(data) {
		console.log(data);
        if(data) {
			announce.push(data);
			var html = content.innerHTML;
			html += announce[0] + '<br />';
			console.log(announce);
			content.innerHTML = html;
		}
    });

	sendButton.onclick = sendMessage = function() {
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = field.value;
            socket.emit('send', { message: text, username: name.value });
			field.value = "";
        }
    };
	
	$(document).ready(function() {
		$("#field").keyup(function(e) {
			if(e.keyCode == 13) {
				sendMessage();
			}
		});
	}(jQuery));

}