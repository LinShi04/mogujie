const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

app.use(history())

app.use(express.static('./dist'))

app.listen(9999)

console.log('服务已启动')
