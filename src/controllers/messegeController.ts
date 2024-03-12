import express from 'express'
import MessageModel from "../db/messege"
class messagecontrller {
    CreateMessage = async (request: express.Request, response: express.Response) => {
        try {
            const { name, phone, email, message } = request.body;
            const messages = new MessageModel({
                name,
                phone,
                email,
                message
            });
            await messages.save();
            return response.status(200).json({ message: "message created", data: messages })

        } catch (error) {
            return response.sendStatus(400);
        }
    }


    getAllMessage = async (request: express.Request, response: express.Response) => {
        try {
            const messages = await MessageModel.find();
            return response.status(200).json({ data: messages })

        } catch (error) {
            return response.sendStatus(400);
        }
    }
    getMessage = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const message = await MessageModel.findById(id);
            return response.status(200).json({ data: message })

        } catch (error) {
            return response.sendStatus(400);
        }
    }
    deleteMessage = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            await MessageModel.findByIdAndDelete({ id: id });
            return response.status(200).json({ data: "message deleted" })

        } catch (error) {
            return response.sendStatus(400);
        }
    }
}
export default new messagecontrller();