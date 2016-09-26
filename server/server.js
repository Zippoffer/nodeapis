'use strict'

const express = require('express')

const app = express()
const port = process.env.PORT || 3000
// app.set('port', port)
app.use(express.static('client'))

app.listen(port, () => console.log(`listening on port: ${port}`))



