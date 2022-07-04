const express = require("express"); //1
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJSON = require('./swagger.json');
const swaggerUI = require('swagger-ui-express');
const app = express(); //2
const expressLayouts = require('express-ejs-layouts') //9
const router = require('./router')

var corsOptions = {
  origin: "http://localhost:5000" //3
};

app.use(cors(corsOptions));

//view engine

app.use(express.static('public')) //5
app.set('view engine', 'ejs') //6
app.use(expressLayouts) //10
app.set('layout', 'layouts/default')

app.get("/", (req, res) => {
  res.render("default")
})

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true })); //7
app.use(bodyParser.json()); //8

app.use(router)



// swagger
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));
const db = require("./app/models");
db.client.sync();



const setDefault = (req, res, next) => {
  res.locals.contenName = "Default"
  next()
}

require("./app/routes/player.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { //4
  console.log(`Server is running on port ${PORT}.`);
});
