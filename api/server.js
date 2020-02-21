const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const users = require('./auth')


const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', users)

server.get('/', (req, res) => {
   res.send(`hello nurse!`)
})



module.exports = server