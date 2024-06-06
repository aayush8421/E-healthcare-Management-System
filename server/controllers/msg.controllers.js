import { Message } from "../models/msg.model.js";
import ErrorHandler from "../middlewares/error.middlewares.js";
export const sendMessage=async (req, res, next)=>{
    const {firstName, lastName, email, phone, message} =req.body;

    if(!firstName|| !lastName|| !email|| !phone|| !message)
        {
            return next(new ErrorHandler("Please Fill the Full Form", 400));
        }

    await Message.create({firstName, lastName, email, phone, message});
        res.status(200).json({
            success:true,
            message: "Message sent successfully!"
        });
}
