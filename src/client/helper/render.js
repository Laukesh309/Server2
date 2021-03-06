
import React from 'react'
import {renderToString} from "react-dom/server"
import {StaticRouter} from 'react-router-dom'
import Routes from "../Routes"
import Home from "../component/Home"
import {Provider} from "react-redux"
const render =(req,store)=>{
    const content = renderToString(
        <Provider store={store}>
        <StaticRouter location ={req.path} context={{}}>
            <Routes/>
        </StaticRouter>
        </Provider>
    )
             return `<html>
                 <head>
                  </head>
                 <body>
                <div id ="root">${content}</div>
                <script src ="bundle.js"></script>
                </body>
               </html>`
}

export default render