import Joi from 'joi'

export default {
    validateBody(body) {
        const schema = Joi.object().keys({
            title: Joi.string().required(),
            // author:Joi.string().required(),
            body:Joi.string().required(),
            published: Joi.boolean().required()
          })
        const {value, error} = Joi.validate(body, schema);
        if(error && error.details) {
            return {error};
        }
        return {value};
    },
};