const app = require('express')();
const open = require('open');
var express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
var path = require('path')
var htmlPath = path.join(__dirname, 'game')

app.use(express.static(htmlPath));


io.on('connection', (socket) => {
  socket.on('tempest', msg => {

    console.log(msg)

  });
});

http.listen(port, () => {
  console.log(`Opening game in : localhost:${port}`)
  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    //open(`http://${add}:${port}`)
  })
});
