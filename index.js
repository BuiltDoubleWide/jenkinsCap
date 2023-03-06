
const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();

//pug goes here 
const pug = require('pug');
const path = require('path');


//set up the pug view engine and where to find the pug files
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

//set up location for the publc files

app.use(express.static(path.join(__dirname, '/public')));


const urlencodeParser = bodyParser.urlencoded({
    extended: true
});

app.get('/', routes.index);
app.get('/features', routes.features);
app.get('/order', routes.order);
app.post('/submitted', urlencodeParser,routes.submittedData)

app.listen(3000);

