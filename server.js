const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
var server = http.Server(app);
var io = socketIO(server, {
  pingTimeout: 60000,
  
})

app.set('port', 3000)
app.use('/public', express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'))
})

server.listen(3000, function () {
  console.log('Starting server...')
})

var players = {}
var gameState = "Initialzing";

console.log('here')

io.on('connection', function (socket){
  console.log('player [' + socket.id + '] connected')

  if(Object.keys(players).length < 2){
    players[socket.id] = {
      Deck: [],
      playerID: socket.id
    }
  }

 socket.emit('currentPlayers', players)
 socket.broadcast.emit('newPlayer', players[socket.id])

 socket.on('disconnect', function () {
   console.log('player [' + socket.id + '] disconnected')
   delete players[socket.id]
   io.emit('playerDisconnected', socket.id)
 })

})
