const joi = require('joi');

const objectRequestValidator = ({productTitle, weight, date}) => {
    const productInputSchema = joi.object({
        productTitle: joi.string().required(),
        weight: joi.number().required().min(1).max(1000).integer(),
        date: joi.string().required(),
    })
    const {error, value} = productInputSchema.validate({productTitle, weight, date});

    if (error) {
        return error;
    } 
}

export default objectRequestValidator;
