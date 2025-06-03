const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');
const Blog = require('./models/Book');  

const app = express();


const db = "mongodb+srv://Hammad:Hammad123.@node.9jjukmv.mongodb.net/?retryWrites=true&w=majority&appName=Node";

// Connect to MongoDB 
mongoose.connect(db)
    .then(() => {
        app.listen(3000);
        console.log('connect DB');
    })
    .catch((err) => {
        console.log(err);
    });

