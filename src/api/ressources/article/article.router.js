import express from 'express';
import articleCtrl from './article.ctrl';
import passport from "passport";

export const articleRouter = express.Router()

articleRouter.route("/")
  .post(passport.authenticate("jwt", {session:false}), articleCtrl.create)
  .get(articleCtrl.findAll)

articleRouter.route("/:id")
  .get(articleCtrl.findOne)
  .put(passport.authenticate("jwt", {session:false}),articleCtrl.update)
  .delete(passport.authenticate("jwt", {session:false}),articleCtrl.delete)