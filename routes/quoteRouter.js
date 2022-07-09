const express = require('express');
const router = express.Router();

//Import Controllers
const {
    getAllQuotes,
    createQuote,
    getQuoteById,
    updateQuoteById,
    deleteQuoteById} = require('../controllers/quoteController');

router.get("/",getAllQuotes)

router.post("/",createQuote)

router.get("/:id",getQuoteById)

router.patch("/:id",updateQuoteById)

router.delete("/:id",deleteQuoteById)


module.exports = router;
