import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var dayOriginal = "";

app.use(bodyParser.urlencoded({extended:true}));

const convertDay = function (req,res,next){

    const d = new Date(req.body.dayYear); 
    dayOriginal = d.getDay();
    console.log(req.body);

    next();
}

app.use(convertDay);

app.get("/", (req, res) => {
    // console.log(__dirname + "/public/index.html");
    // const day = new Date();
    // const today = day.getDay();
    // console.log(today);
    res.sendFile(__dirname + "/index.html");

  });

app.post("/submit",(req,res) => {
    console.log(dayOriginal);
    res.render("index.ejs",
    {day : dayOriginal}
    );
  // console.log(req.body.street);
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



