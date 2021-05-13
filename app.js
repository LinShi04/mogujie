const express = require('express')

const app = express()

app.use(express.static('./dist'))

app.listen(9999)

console.log('服务已启动')
