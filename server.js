const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();


app.use(bodyParser.json({
    limit: '10mb'
}));

app.use(bodyParser.urlencoded({
    extended: false,
    limit: '10mb'
}));

// enable cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

router.get('/contatos', (req, res) => {
    res.status(200).send({
        contatos: [
            {
                nome: "raphael carubbi neto",
                idade: 36
            },
            {
                nome: "yendis gomes",
                idade: 26
            },
        ]
    })
});
app.use("/", router);

http.createServer(app).listen(3000);