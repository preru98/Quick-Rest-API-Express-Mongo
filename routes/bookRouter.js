const express = require('express');
const Books = require('../models/book');

const bookRouter = express.Router();

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
    }
);

module.exports = bookRouter;