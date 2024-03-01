import Message, { IMessage } from '../db/messege';

export const saveMessage = async (data: IMessage): Promise<IMessage> => {
    try {
        const newMessage = new Message(data);
        return await newMessage.save();
    } catch (error) {
        throw new Error('Failed to save message to the database');
    }
};
