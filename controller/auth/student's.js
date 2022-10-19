/** @format */

import Joi from "joi";

const studentRegister = {
    async singUp(req, res, next) {
        // logic for register
        // CHECKLIST
        // validate the request aur joi npm ka use kar rahi hai

        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(15).required(),
            surname: Joi.string().min(3).max(15).required(),
            Roll_No: Joi.number().required(),
            email: Joi.string().email().required(),
            password: Joi.string()
                .pattern(new RegExp("^[a-zA-Z0-9,@]{3,30}$"))
                .required(),
            conform_password: Joi.ref("password"),
            Phone_Number: Joi.number().required()
        });
        // check the validation
        const { error } = registerSchema.validate(req.body);

        //  agger error hai
        if (error) {
            return next(error);
        }
        res.json({ meg: "hello" });
    },
};

export default studentRegister;
