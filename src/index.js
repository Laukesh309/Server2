import 'babel-polyfill'
import express from "express";
import render from "./client/helper/render"
import { matchRoutes} from "react-router-config"
import Routes from "./client/Routes"
import createStore from "./client/helper/createStore"
const app = express();

app.use(express.static("public"))
app.get("*",(req,res)=>{
    const store = createStore();
    //some logic to initialize
    //and load data
  const  promises= matchRoutes(Routes,req.path).map(({route})=>{
       return route.loadData ? route.loadData(store):null;
   })
   Promise.all(promises).then(()=>{
       res.send(render(req,store))
   })

})

app.listen(3000,()=>{
    console.log("serverStarted")
})