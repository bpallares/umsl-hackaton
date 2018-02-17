const express = require('express')

const bodyParser = require('body-parser')
const server = express()
const router = express.Router()

const port = process.env.PORT || 5000
/*
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json)
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,Acccess-Control-Request-Headers')
  res.setHeader('Cache-Control', 'no-cache')
  next()
}) */

server.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
})
server.listen(port, () => {
  console.info('Express listening on port ', port)
})
