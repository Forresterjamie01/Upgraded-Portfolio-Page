

const express = require('express');
//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection")
const routes = require("./controllers/index.js")
const helpers = require('./utils/helpers'); 



// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3005;

const hbs = exphbs.create({ helpers }); 


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes)
//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars');

// app.use(routes);

//app.get('/', function (req, res) {
    //res.render('login');
//});


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening '));

});