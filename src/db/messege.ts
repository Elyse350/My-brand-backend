import mongoose, { Schema, Document} from "mongoose";

export interface IMessage extends Document {
    name: string;
    phone: string;
    email: string;
    message: string;
  }
const MessageSchema : Schema = new Schema({
    name: {type: String, required:true},
    phone: {type: String, required:true},
    email: {type: String, required:true},
    message: {type: String, required:true}
});

const MessageModel = mongoose.model<IMessage>('Message', MessageSchema);

export default MessageModel;