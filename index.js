// Import express and mongooese packages
const express = require('express');
const mongoose = require('mongoose');

//import router
const routes = require('./Routers/app');

const host = "localhost";
const port = 8900;

// MogngoDB connecting string
const uri = "mongodb+srv://AnandDewangan:Ndrh9IhvJFMw2ezV@cluster0.bwp7bfv.mongodb.net/Zomato";
const app = express();
// Middleware to handle json date
app.use(express.json());

// Handling CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type', 'Authorization');
    next();
})

// Navigate all req to router
app.use('/',routes);

// Connect to Database and starting server
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}).
    then(() => {
        app.listen(process.env.PORT || 8900,host,() => {
            console.log(`Server running at ${host}:${port}`);
        });
    }).
    catch((err) => {
        console.log(err);
    }
)
