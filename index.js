const express = require('express');
const app = express();
const { getName, getFullName } = require("./Naming");  

app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, access');
    next();
});

app.get('/v1/health', (req, res) => {
    res.send('0');
});

app.get('/', (req, res) => {
    res.send('REST API Сервер, Текущая версия V1.0.5');
});
app.get('/v1/name', (req, res) => {
    const params = new URL(req.url,'http://localhost').searchParams;
    if(params.has("fullName")) {
        res.send(getFullName());
    } else {
        res.send(getName());
    }
});

const clb = () => {
    console.log('[*] Доступно подключение по адресу: http://127.0.0.1:' + app.get('port'));
};

app.listen(app.get('port'), clb ); 
module.exports.server = app;
module.exports.func = clb;