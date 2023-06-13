const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

module.exports = app