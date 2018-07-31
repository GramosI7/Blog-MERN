import Joi from "joi";
import validator from "validator";
import isEmpty from "../../validation/is-empty"
import bcrypt from "bcryptjs";


export default {
    encryptPassword(plainText) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainText, salt);
    },
    comparePassword(plainText, encryptedPassword) {
        return bcrypt.compareSync(plainText, encryptedPassword);
    },
    validateSignup(body) {
        let errors = {};

        body.firstName = !isEmpty(body.firstName) ? body.firstName : "";
        body.lastName = !isEmpty(body.lastName) ? body.lastName : "";
        body.email = !isEmpty(body.email) ? body.email : "";
        body.password = !isEmpty(body.password) ? body.password : "";
        body.password2 = !isEmpty(body.password2) ? body.password2 : "";
    
        if(!validator.isLength(body.firstName, { min : 2, max : 30 })){
            errors.firstName = "Votre firstName doit contenir entre 2 et 30 caracteres.";
        }
        if(validator.isEmpty(body.firstName)) {
            errors.firstName = "Un firstName est requis.";
        }
        if(!validator.isLength(body.lastName, { min : 2, max : 30 })){
            errors.lastName = "Votre lastname doit contenir entre 2 et 30 caracteres.";
        }
        if(validator.isEmpty(body.lastName)) {
            errors.lastName = "Un lastname est requis.";
        }
        if(!validator.isEmail(body.email)) {
            errors.email = "L'email est invalide.";
        }
        if(validator.isEmpty(body.email)) {
            errors.email = "Inserez un email.";
        }
        if(validator.isEmpty(body.password)) {
            errors.password = "Un mot de passe est requis.";
        }
        if(validator.isEmpty(body.password2)) {
            errors.password = "Un mot de passe est requis.";
        }
        if(!validator.isLength(body.password, {min: 6, max: 30})) {
            errors.password2 = "Votre mot de passe doit contenir plus de 6 caracteres.";
        }
        if(!validator.equals(body.password, body.password2)) {
            errors.password2 = "Vos mot de passe de sont pas identiques.";
        }
        return {
            errors,
            isValid: isEmpty(errors)
        }
    },
    validateLogin(body) {
        let errors = {};

    body.email = !isEmpty(body.email) ? body.email : "";
    body.password = !isEmpty(body.password) ? body.password : "";
    
    if(!validator.isEmail(body.email)) {
        errors.email = "L'email est invalide.";
    }
    if(validator.isEmpty(body.email)) {
        errors.email = "Inserez un email.";
    }
    if(validator.isEmpty(body.password)) {
        errors.password = "Un mot de passe est requis.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
        }
    }
};