import  express  from "express";
import mongoose from "mongoose";
import router from "./routes";

 const app = express();
 app.use(express.json());

 


 const MONGO_URL ="mongodb+srv://elyse123:elyse123@cluster0.opfpung.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 mongoose.connect(MONGO_URL,{
    dbName: "Cluster0",
 })
 .then(() => {
    console.log("database connected");
 })
 .catch((error)=> console.log(error));
 app.use('/', router);
 app.listen(5546, () =>{
console.log('server running on http://localhost:5546');
 });
