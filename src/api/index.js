import express from "express"
import { articleRouter } from "./ressources/article";
import { userRouter } from "./ressources/user";
import { profilRouter } from "./ressources/profil";



export const restRouter = express.Router();

restRouter.use("/article", articleRouter)
restRouter.use("/user", userRouter)
restRouter.use("/profil", profilRouter)

