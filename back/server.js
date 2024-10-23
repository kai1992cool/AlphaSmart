/*
const http = require('http');
const { Server } = require("socket.io");

const PORT = 3000;
const HOST = 'localhost';
const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
	'Access-Control-Max-Age': 2592000
}

const getListener = (request, response) => {
	response.writeHead(200, headers);
	response.end(JSON.stringify('GET IS OK'));
}

const requestListener = (request, response) => {
	switch (request.method) {
		case 'GET':
			getListener(request, response);
			break;
		default:
			console.log('Unsupported method ', request.method);
	}
}

const server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});

const io = new Server(server);

console.log(io);

io.on('connection', (socket) => {
	console.log('User connected');
})

 */

import { WebSocketServer } from 'ws';

const PORT = 3000;
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', function connection(ws) {
	console.log('Client connected');
	
	ws.on('error', console.error);
	
	setInterval(() => {
		ws.send(Math.random());
	}, 1000);
	
	ws.on('message', function message(data) {
		console.log('received: %s', data);
	});
	
	ws.send('something');
});