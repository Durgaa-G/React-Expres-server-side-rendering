import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "./store/reducers/index";
import {renderRoutes} from "react-router-config"


const store =createStore(reducers,window.INITIAL_STATE, applyMiddleware(thunk))
ReactDOM.hydrate(
    <Provider store={store}>
    <BrowserRouter>
        {renderRoutes(Routes)}
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'));