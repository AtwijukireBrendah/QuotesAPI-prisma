const express=require('express');
const app = express();

//routers
const quoteRouter = require('./routes/quoteRouter');
const authorRouter = require('./routes/authorRouter');

//Middleware
app.use(express.json());

//Route Handlers
app.use("/quotes",quoteRouter);
app.use("/authors",authorRouter);

const PORT = process.env.PORT || 5009;
app.listen(PORT,()=>{
console.log(`Server is running on :${PORT}`)});
