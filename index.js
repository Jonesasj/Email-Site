'use strict';

const express = require('express');
const app = express();


//Set the template engine to pug, it will find the templates in the views folder

app.set('view engine', 'pug');

app.get('/', (req,res) => {

    res.render('index');
});

app.listen(3000);


