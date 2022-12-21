const express = require('express');
const app = express();
const router = express.Router();
const http = require('http');
const path = __dirname + '/views/';
const variableToAssert = 'This is a test that should not pass';
const port = 4040;

router.use(function (req, res, next) {
    next();

});

app.get('/test', function (req, res) {
    http.get('http://192.168.0.108:8082/', (resp) => {

        resp.setEncoding('utf8');

        resp.on('data', function (result) {

            if (result == variableToAssert)  {
                console.log("trueee");

                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.write('true');
                res.end();

            } else {

                console.log("false")
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.write('false');
                res.end();
            }
        });

    }).on("error", (err) => {

        console.log("Error: " + err.message);

    })});
    app.listen(3030, () => console.log("ready"));

