// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const { indexRouter } = require('./indexRouter');
const newRouter = require('./newRouter');


// Setting EJS as templating engine
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Parse incoming data
app.use(express.urlencoded({extended: true}))

// Defining routes
  app.use("/", indexRouter);
  app.use("/new", newRouter);

// Creating server
app.listen(8080, ()=>{
    console.log("Server is listening on PORT 8080.")
});


