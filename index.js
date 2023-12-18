import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", async(req, res)=>{
    res.send(`<h1>All Good </h1>`)
})

app.get("/health", async(req, res)=>{
    res.send(`<h1>Awesome..</h1>`)
})

app.get("/test", (req, res)=>{
    res.send("<h1>Hey I am Working....</h1>")
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
});