import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Home from "./component/Home"
import {BrowserRouter} from "react-router-dom"
import Routes from "./Routes"
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux'
import reducers from "./reducer/index"
import {renderRoutes} from "react-router-config"
const store = createStore(reducers,{},applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
       <BrowserRouter>
         <div>
             {renderRoutes(Routes)}
         </div>
    </BrowserRouter>
    </Provider>
,document.getElementById("root"))