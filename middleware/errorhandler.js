import { DEBUG_MODE } from "../config/config.js";
import Joi from "joi";

const errorHandler = (err, req, res, next) => {
    // throw error clint

    let statusCode = 500;
    let data = {
        message: 'Internal server error',
        ...(DEBUG_MODE === "true" && { originalError: err.message })
    }


    // aye jo err mila rahai hai wo ValidationError ka instanceof(class) hai ki nahi 
    //ValidationError ki class hame registerController ka error ka joi sa bate chale ga 
    if (err instanceof Joi.ValidationError) {
        statusCode = 422;
        data = {
            message: err.message
        }
    }
    return res.status(statusCode).json(data)
}

export default errorHandler;