import express from "express";
import "dotenv/config";
import { connect } from "./config/db";
import { restRouter } from "./api";
import passport from "passport";
import { configJWTStrategy} from './api/middlewares/passport-jwt';


const { port } = process.env

connect()

const app = express();

app.get("/", (req, res) => {
    res.send("ok")
});

app.get("/api", (req, res) => {
    res.send("dans api")
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(passport.initialize())
configJWTStrategy();

// app.use((req, res, next) => {
//     const error = new Error("Not found")
//     error.message = "route invalide"
//     error.status = 404
//     next(error)
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500)
//     return res.json({
//         error:{
//             msg: error.message
//         }
//     })
// });


app.use("/api", restRouter)

app.listen(port, () => {
    console.log(`Le serveur ${port} tourne !`);
})