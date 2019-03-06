const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Initializing app
const app = express();
app.use(express.json());

//Using cross-origin request security
app.use(cors());

//Initializing DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

//Importing application's models
requireDir('./src/models/');

//Routes
app.use('/api', require('./src/routes'));

app.listen(3001);
