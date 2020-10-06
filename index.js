// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./backend/api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
let mongolink = 'mongodb+srv://yuanxin:yuanxin@taskb.bhsea.gcp.mongodb.net/OTOT?retryWrites=true&w=majority';
mongoose.connect(mongolink, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Use Api routes in the App
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes);

exports.taskB = app;