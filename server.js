const http = require('http')
const express = require('express')
const app = express()
var server = http.createServer(app);
const socketio = require('socket.io');
const cors = require('cors')
var io = socketio(server,{
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });



  

var corsOptions = {
    origin: 'http://localhost:3000',
  }

app.use(cors(corsOptions))

io.on('connection',(socket)=>{



    console.log('socket is ready for connection');



    socket.on('chat', (data) => { 
        console.log(data)
        console.log("joinroom start")

        io.emit('chat',data)
    })



})

server.listen(3001,()=>{
    console.log('server started')
})