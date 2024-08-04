import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let letterNum = 0;

app.use(bodyParser.urlencoded({ extended: true }));

// const nameExtract = function (req,res,next){

//   res.locals.firstName = req.body.fName;
//   res.locals.lastName = req.body.lName;
//   next();
// };
// app.use(nameExtract);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log(res.locals);
  letterNum = req.body.fName.length + req.body.lName.length;

  res.render("index.ejs",{
    length : letterNum
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
