const app = require('./app');
const connectMongoDBAtlas = require('./DB/connection');

connectMongoDBAtlas();

const port = process.env.PORT | 3000;

app.listen(port, () => {
    console.log("server is up!");
});