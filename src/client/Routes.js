import React from "react";
import { Route } from "react-router-dom";
import App from "./App"
import Home from "./Components/Home";


export default [

    {
        ...App,
        routes:[
            {
                ...Home,
                path: "/:pageNumber",

                exact: true
            },
            {
                ...Home,
                path: "/",
                exact: true
            }
        ]

    }

]
