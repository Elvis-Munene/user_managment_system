const express = require('express');

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

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






const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port, ()=> console.log(`listening on port ${port}`));