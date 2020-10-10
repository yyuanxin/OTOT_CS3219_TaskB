// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Import CORS
let cors = require('cors');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
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

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Connected to port ' + port)
})

module.exports = app; // testing