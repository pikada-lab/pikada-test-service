 const express = require('express');
 const app = express();

 app.set('port', 3000)
 app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*')
     res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, access')
     next()
 })



 app.get('/v1/health', (req, res) => {
     res.send('0')
 })

 app.get('/', (req, res) => {
     res.send('REST API Сервер, Текущая версия V1.0.0')
 })
 app.listen(app.get('port'), () => {
     console.log('[*] Доступно подключение по адресу: 127.0.0.1:' + app.get('port'))
 })