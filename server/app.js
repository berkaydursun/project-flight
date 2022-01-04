const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const PORT = process.env.PORT | 3000;
var cors = require('cors')

app.use(cors());
// Add headers


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const router = require('./routes/apiRoute');


app.use('/api/v1/', router);

const server = http.createServer(app);


module.exports=app;