

// imports 
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server
require('./config/db.js');
const path = require('path');
const State = require('./models/State.js');
const Bootcamp = require('./models/Bootcamp.js');
const PORT = 3000;
//



const app = express();
// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());

// will happen on every request (taking away the /server part)
app.use((req, res, next)=> {
    if (req.path.startsWith('/server')) {
        req.url = req.url.replace('/server', ''); // strip /server from the path
    }
    next();
});



// END MIDDLEWARE //

// START ROUTES //


// CREATE BOOTCAMP


// READ BOOTCAMPS

// READ STATES ROUTE
// frontend wants the states!
app.use(express.static(path.join(__dirname, "../client/dist")));





app.get("/states", async (req, res) => {
    try {
        let dbResponse = await State.find();
        res.send(dbResponse)
    } catch(err) {
        res.status(400).send("error getting the states")
    }
});

// CREATE !!!!
app.post("/camps", async (req, res) => {
    try {
        let dbResponse = await Bootcamp.create(req.body);
        res.status(201).send(dbResponse)
    } catch(err) {
        res.status(400).send("error creating camp")
    }
});

// READ !!!!
app.get("/camps", async (req, res) => {
    try {
        let dbResponse = await Bootcamp.find().populate('stateId')
        res.status(200).send(dbResponse)
    } catch(err) {
        res.status(400).send("error getting camp")
    }
});

// UPDATE
app.put("/camps/:bootcampId", async (req, res) => {
    try {
        let dbResponse = await Bootcamp.findByIdAndUpdate(req.params.bootcampId, req.body);
        res.status(200).send(dbResponse);
    } catch(err) {
        res.status(400).send("error deleting camp")
    }
});


// DELETE
app.delete("/camps/:bootcampId", async (req, res) => {
    try {
        let dbResponse = await Bootcamp.findByIdAndDelete(req.params.bootcampId);
        res.status(200).send(dbResponse);
    } catch(err) {
        res.status(400).send("error deleting camp")
    }
});




app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

// END ROUTES //

app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});


