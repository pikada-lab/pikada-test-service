const express = require('express');
const app = express();
const { getName, getFullName, getLastName, getSecondName, getFIO } = require("./Naming");

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.set('host', HOST);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, access');
    next();
});


/**
 * Разбирает URL 
 * @param {*} url 
 * @returns 
 */
const ParamsParser = (url) => {
    return new URL(url, 'http://localhost').searchParams;
};

app.get('/v1/health', (req, res) => {
    res.send('0');
});

app.get('/', (req, res) => {
    res.send('REST API Сервер, Текущая версия V1.0.5');
});
app.get('/v1/name', (req, res) => {
    const params = ParamsParser(req.url);
    if (params.has("fullName")) {
        res.send(getFullName());
    } else if (params.has("lastName")) {
        res.send(getLastName());
    } else if (params.has("secondName")) {
        res.send(getSecondName());
    } else if (params.has("fio")) {
        res.send(getFIO());
    } else {
        res.send(getName());
    }
});
const count = (url, defaultValue) => {
    return +ParamsParser(url).get("count") || defaultValue || 10;
};

app.get('/v1/names', (req, res) => {
    res.send(JSON.stringify(new Array(count(req.url)).fill("").map(_ => getFIO())));
});


const clb = () => {
    console.log(`[*] Доступно подключение по адресу: http://${app.get('host')}:` + app.get('port'));
};

app.listen(app.get('port'), clb);
module.exports.server = app;
module.exports.func = clb;