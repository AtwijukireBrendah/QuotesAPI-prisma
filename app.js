const express=require('express');
const app = express();
const cors = require('cors');

//routers
const quoteRouter = require('./routes/quoteRouter');
const authorRouter = require('./routes/authorRouter');
const userRouter = require('./routes/userRouter');

//Middleware
app.use(express.json());
app.use(cors());

//Route Handlers
app.get('/api/v1/', (req, res)=>{
    res.status(200).json({
        status:200, 
        message:"API working fine"
    })
});

app.get('/api/v1/quotes', (req, res)=>{
    res.status(200).json(quotes)
});

app.use("/api/v1/quotes",quoteRouter);
app.use("/api/v1/authors",authorRouter);
app.use("/api/v1/users",userRouter);

module.exports = app;