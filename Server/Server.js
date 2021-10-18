const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const localhost = require("ip").address()
const qr = require('qrcode')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  qr.toDataURL(`http://${localhost}:${port}`, (e, src) => {
    res.render('scan', { src })
  })
})

app.get('/game', (req, res) => {
  res.render('game')
})


io.on('connection', (socket) => {
  socket.on('tempest', msg => {
    console.log(msg)
    io.emit('tempest', msg)
  })
})

http.listen(port, () => {
  console.log(`Opening game in : localhost:${port}`)
})
