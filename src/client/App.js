import React from "react";
import {renderRoutes} from "react-router-config"


const App=({route})=>{
    return <React.Fragment>
        {renderRoutes(route.routes)}
    </React.Fragment>
}

export default{
    component:App
}