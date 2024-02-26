import  express  from "express";
import mongoose from "mongoose";
import router from "./routes";

 const app = express();
 app.use(express.json());




 const MONGO_URL ="mongodb+srv://elyse21:elyse21@todo.mdwdjwm.mongodb.net/?retryWrites=true&w=majority&appName=todo";
 mongoose.connect(MONGO_URL,{
    dbName: "todo",
 })
 .then(() => {
    console.log("database connected");
 })
 .catch((error)=> console.log(error));
 app.use('/', router);
 app.listen(5546, () =>{
console.log('server running on http://localhost:5546');
 });
