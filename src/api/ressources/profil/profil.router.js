import express from 'express';
import profilController from './profil.ctrl';
import passport from "passport";

export const profilRouter = express.Router()

profilRouter.get('/me', passport.authenticate("jwt", {session:false}), profilController.findOneMe)
profilRouter.get('/handle/:handle', passport.authenticate("jwt", {session:false}), profilController.findOneHandle)
profilRouter.get('/all', passport.authenticate("jwt", {session:false}), profilController.findAll)
profilRouter.post('/', passport.authenticate("jwt", {session:false}), profilController.create)