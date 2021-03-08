const mongoose = require('mongoose');

const URI = 'mongodb+srv://***.gyh5q.mongodb.net/***?retryWrites=true&w=majority';

connectDB = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true}
    )
    .then(() => {
    console.log('MongoDB Atlas Connected ../Cluster0/Books')
    })
    .catch(err => console.log(err));
}  

module.exports = connectDB;