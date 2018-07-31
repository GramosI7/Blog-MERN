import validator from "validator";
import isEmpty from "../../validation/is-empty";
import Validator from "validator";


export default {
    validateProfileInput(data) {
        let errors = {};

        data.handle = !isEmpty(data.handle) ? data.handle : '';
        data.status = !isEmpty(data.status) ? data.status : '';


        if (!Validator.isLength(data.handle, {
                min: 2,
                max: 40
            })) {
            errors.handle = 'Handle needs to between 2 and 4 characters';
        }

        if (Validator.isEmpty(data.company)) {
            errors.company = 'Profile company is required';
        }
        if (Validator.isEmpty(data.website)) {
            errors.website = 'Profile website is required';
        }
        if (Validator.isEmpty(data.location)) {
            errors.location = 'Profile location is required';
        }
        if (Validator.isEmpty(data.status)) {
            errors.status = 'Profile status is required';
        }
        if (Validator.isEmpty(data.bio)) {
            errors.bio = 'Profile bio is required';
        }
        return {
            errors,
            isValid: isEmpty(errors)
        };
    }
};