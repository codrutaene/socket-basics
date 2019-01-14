var name = getQueryVariable('name') || 'Anonymus';
var room = getQueryVariable('room');

var $header = jQuery('.room-title');
$header.html(room);

console.log('name ' + name + ' room ' + room);

var socket = io();

socket.on('connect', function () {
	console.log("connected to socket.io server");

	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp).local().format('h:mm a');
	var $message = jQuery('.messages');

	console.log("new message!");
	console.log(message.text);

	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp + '</strong></p>');
	$message.append('<p>' + message.text + '</p>');	
});

// handle submit new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();

	socket.emit('message', {
		name: name,
		text: $form.find('input[name=message]').val()
	});

	$form.find('input[name=message]').val('') ;
});