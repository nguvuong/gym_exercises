// used to connect our application to the dom
import React from "react";
import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom";

const root =  ReactDOM.createRoot(document.getElementById('root'));


root.render(

    //   use browser router for functioning of the routes 
<BrowserRouter>
<App/>
</BrowserRouter>
);