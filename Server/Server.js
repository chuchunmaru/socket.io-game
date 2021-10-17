const app = require('express')();
const open = require('open');
var express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
var path = require('path')
const bodyParser = require('body-parser')
const localhost = require("ip").address()
const qr = require('qrcode')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static('public')); 
app.use(express.static('views')); 
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index')
})




http.listen(port, () => {
  console.log(`Opening game in : localhost:${port}`)
});
