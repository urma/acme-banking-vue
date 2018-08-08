'use strict'

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ strict: true }))

app.use('/static', express.static(path.join(__dirname, 'static')))

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at http://0.0.0.0:3000/')
})

module.exports = app