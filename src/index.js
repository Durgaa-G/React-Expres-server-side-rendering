import "@babel/polyfill";
import express from 'express';
import renderer from "./helpers/renderer";
import createSTore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import proxy from "express-http-proxy"

const app = express();

// app.use("/api", proxy("https://hn.algolia.com/api/v1", {
//     proxyReqOptDecorator(opts) {
//         opts.header['x-forwarded-host'] = "localhost:3000";
//         return opts;
//     }

// }))

app.use(express.static('public'))

app.get("*", (req, res) => {
    const store = createSTore();

    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {

            return route.loadData ? route.loadData(store) : null;
        })
    Promise.all(promises).then(() => {
        res.send(renderer(req, store))
    })
})
console.log(`port: ${process.env.PORT}--${$PORT}-- port: ${process.env.$PORT}`)
app.listen(process.env.PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`)
})
