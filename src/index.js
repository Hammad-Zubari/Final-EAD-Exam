const express = require('express');


const mongoose = require('mongoose');
const Book = require('./models/Book');  

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


app.get('/books', (req, res) => {
    Book.find()
     blog.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    Book.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
});


app.post('/books', (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
});



app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    Book.findByIdAndRemove(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

