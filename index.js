const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const DATABASE_URL = 'mongodb://localhost:27017/nodeapi';
const PORT = 3001;

const adminRouter = require('./admin.router');

//Initializing app
const app = express();
app.use(express.json());

//Using cross-origin request security
app.use(cors());

//Adding admin router
app.use('/admin', adminRouter);

//Initializing DB
mongoose.connect(
    DATABASE_URL,
    { useNewUrlParser: true }
);

//Importing application's models
requireDir('./src/models/');

//Routes
app.use('/api', require('./src/routes'));

app.listen(PORT, () => console.log(`Admin console is running under localhost:${PORT}/admin`));
