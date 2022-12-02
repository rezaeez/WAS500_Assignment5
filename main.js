const express = require("express");
const router = express.Router();
const path = require("path");
const controller = require( "./controllers/bookcontroller");
// GET / - return the index.html file
router.get("/" , controller.home); 
router.get("/home", controller.home);
router.get("/index" , controller.home); 
router.get("/contact" , controller.contact); 
router.get("/survey" , controller.survey); 
router.get("/honesty" , controller.honesty); 
router.get("/booksList" , controller.allbooks); 
router.use("/books" ,controller.bookdetail  );
router.get("/addbook" , controller.addbook);
// export
module.exports = router;
