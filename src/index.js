import 'babel-polyfill'
import express from "express";
import render from "./client/helper/render"
import createStore from "./client/helper/createStore"
const app = express();

app.use(express.static("public"))
app.get("*",(req,res)=>{
    const store = createStore();
    //some logic to initialize
    //and load data
    res.send(render(req,store))
})

app.listen(3000,()=>{
    console.log("serverStarted")
})