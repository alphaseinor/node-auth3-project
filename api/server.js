const express = require('express')
const users = require('./auth')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
   res.send(`hello nurse!`)
})

server.use('/api/users', users)

module.exports = server