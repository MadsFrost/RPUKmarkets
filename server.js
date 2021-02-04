const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require('path')

const port = process.env.PORT || 80;


// ** MIDDLEWARE ** //
let v1 = "http://localhost:80"
let v2 = "http://localhost:3000"
let v3 = "https://rpukmarket.herokuapp.com/"
let whitelist = [v1,v2,v3];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pricesRouter = require("./routes/prices");
app.use("/prices", pricesRouter);

app.listen(port, function() {
    console.log("Backend running on: " + port);
  });

  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Anything that doesn't match the above, send back index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })

module.exports = app;