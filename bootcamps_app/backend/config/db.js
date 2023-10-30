// connect mongoose to DB

const mongoose = require('mongoose');

let connectionString = process.env.MONGO_URL

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});
