const express = require('express');

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql')
var hbs = require('hbs');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//Parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));


//Parse application/json

app.use(bodyParser.json());


//static files
app.use(express.static('public'));



//Templating Engine
app.set('views', './views');
app.set('view engine', 'ejs');



//Router

app.get('/', (req, res) => {
    res.render("main.ejs");
})


app.listen(port, ()=> console.log(`listening on port ${port}`));