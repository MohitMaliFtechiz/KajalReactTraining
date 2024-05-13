const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8000;
const router = require('./routes/products.js');
const connectDB = require('./db/connectDb.js');

dotenv.config();

app.use(express.json());

app.use('/api/auth', router);

app.get('/', (req, res)=>{
    res.send("hello");
})
connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    });
})
