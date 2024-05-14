const express = require('express');
const EventEmitter = require('events');
const port = 3000;
const app = express();
const event = new EventEmitter();

event.on("sum", () => {
    console.log('emitter start');
});

app.get("/", (req, res) => {
    res.send("login successfully");
    event.emit("sum");
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
