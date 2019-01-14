var socket = io();
// var db = require('./moment.js');

socket.on('connect', function () {
	console.log("connected to socket.io server");
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp).local().format('h:mm a');

	console.log("new message!");
	console.log(message.text);

	jQuery('.messages').append('<p><strong>'+ momentTimestamp +': </strong>'+ message.text+'</p>');
});

// handle submit new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();

	socket.emit('message', {
		text: $form.find('input[name=message]').val()
	});

	$form.find('input[name=message]').val('') ;
});