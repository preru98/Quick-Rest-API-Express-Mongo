const express = require('express');
const bodyParser = require('body-parser');

const Books = require('../models/book');

const bookRouter = express.Router();

bookRouter.use(bodyParser.json());

bookRouter.route('/books')
    .get((req, res) => {
        Books.find({})
            .then((allBooks) => {
                res.json(allBooks);
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
            })
        ;
    })
    .post((req,res) => {
        Books.create(req.body)
        .then( (book) =>{
            console.log("book Created ", book)
            res.statusCode=200
            res.setHeader('Content-Type', 'application/json')
            res.json(book)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
    });

    

module.exports = bookRouter;