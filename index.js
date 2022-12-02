const express = require("express");
const app = express();
const port = 3000;

const router = require("./main");

app.use(express.static("public"));
app.use("/" ,router  );
app.use("/home", router);
router.get("/contact" , router); 
router.get("/survey" , router); 
router.get("/honesty" , router); 
app.use("/booksList" ,router  ); 
app.use("/books" ,router  ); 
app.use((req, res, next) => {
  res.status(404).render( "../views/page_404.ejs"  );
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

