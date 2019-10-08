const express = require('express');
const app = express();
// var amqp = require('amqplib/callback_api');

app.set('port', 3000)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, access')
    next()
})

// amqp.connect('amqp://localhost', function(error0, connection) {
//     if (error0) throw error0;
//     console.log('[*] Доступно подключение rebbitmq: 127.0.0.1:5672')
//     connection.createChannel(function(error1, channel) {
//         if (error1) throw error1;
//         var queue = 'hello';
//         channel.assertQueue(queue, {
//             durable: false
//         });
//         setInterval(() => {
//             var msg = 'Hello world ' + Math.round(Math.random() * 5 + 1);
//             channel.sendToQueue(queue, Buffer.from(msg));
//         }, 1000);
//     });

// });

app.get('/v1/health', (req, res) => {
    res.send('0')
})

app.get('/', (req, res) => {
    res.send('REST API Сервер, Текущая версия V1.0.0')
})
app.listen(app.get('port'), () => {
    console.log('[*] Доступно подключение по адресу: 127.0.0.1:' + app.get('port'))
})