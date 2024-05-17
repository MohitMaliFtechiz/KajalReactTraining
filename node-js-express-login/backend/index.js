const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const router = require('./routes/auth_router.js');
const connectDB = require('./db/connectDb.js');

dotenv.config();

app.use(express.json());

//cors Error
app.use(cors());

app.use('/api/auth', router);

app.get('/', (req, res)=>{
    res.send("hello");
})
connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    });
})
