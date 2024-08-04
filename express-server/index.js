import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hi</h1>");
});

app.get("/about",(req,res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hi I am Ritika</h1><p>Hello</p>");
});

app.post("/register",(req,res) =>{

    res.sendStatus(201);
});

app.put("/user/ritika",(req,res) =>{
    // console.log(req.rawHeaders);
    res.sendStatus(200);
})

app.patch("/user/ritika",(req,res) =>{
    // console.log(req.rawHeaders);
    res.sendStatus(200);
});

app.delete("/user/ritika",(rew,res) => {

    res.sendStatus(200);
});

app.listen(3000, () =>{

    console.log(`listening on port ${port}`);
})