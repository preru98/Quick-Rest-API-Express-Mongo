const express = require('express');
const bookRouter = express.Router();

bookRouter.route('/books')
    .get((req, res) => {
    const result = {title : "1984", author : "George Orwell"};
    res.json(result); 
    }
);

module.exports = bookRouter;