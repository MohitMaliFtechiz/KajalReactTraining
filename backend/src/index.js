const express = require('express');
// const dotenv = require('dotenv');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const http = require('http');
// const axios = require('axios');
const product_routes = require('./routes/products');

const server = http.createServer((req, res) => {
    res.end("hello server")
})
// dotenv.config();
app.use(bodyParser.json());

//template engine
app.set('view engine', 'hbs')
app.set('views', './views')

event.on("sum", () => {
    console.log('emitter start');
});
app.use('/api/products', product_routes);


// app.get("/", async(req, res) => {
//     const respone = await axios.get("https/api/ajj");
//     const data = respone.data;
//     res.json(data);
//     console.log("data:", data);
//     const { username, age } = req.body;
//     console.log("Received username:", username);
//     console.log("Received username:", age);
//     res.render('index', { message: 'Hello, Sanjay Sir!' });
//     event.emit("sum");
// });

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
