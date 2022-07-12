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
app.use("/quotes",quoteRouter);
app.use("/authors",authorRouter);
app.use("/users",userRouter);

const PORT = process.env.PORT || 5009;
app.listen(PORT,()=>{
console.log(`Server is running on :${PORT}`)});
