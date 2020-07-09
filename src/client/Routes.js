import React from "react";
import { Route } from "react-router-dom";

import Home from "./Components/Home";


export default [
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
