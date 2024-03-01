import express, { Router } from "express";
import employeeController from "../controllers/employeeController";
import messagecontrller from '../controllers/messegeController'
import BlogController from '../controllers/blogController';
import UserController from '../controllers/authController';
import Validator from "../middleware/validator";
import DataChecker from "../middleware/datachecker";
import VerifyToken from "../middleware/verifyToken";
// import VerifyAccess from "../middleware/veriftAccess";

const router: Router = express.Router();



// Employee routes
router.get("/employee", employeeController.getAllEmployee);
router.get("/employee/:id", employeeController.getEmployee);
router.post("/employee", employeeController.CreateEmployee);
router.put("/employee/:id", employeeController.updateEmployee);
router.delete("/employee/:id", employeeController.deleteEmployee);

// Blog routes
router.post('/blogs',

    Validator.validateInput,  BlogController.CreateBlog);
router.get('/blogs', BlogController.getAllBlog);
router.get('/blogs/:id', BlogController.getBlog);
router.put('/blogs/:id', BlogController.updateBlog);
router.delete('/blogs/:id', BlogController.deleteBlog);

// Authentication routes
router.get('/user', UserController.getAllUsers);
router.post('/user', DataChecker.isEmailExist, Validator.newAccountRules(), Validator.validateInput, UserController.createUser);
router.get('/user/:id', UserController.getOneUser);
router.post('/login', UserController.userLogin);
router.delete('/user/:id', UserController.deleteOneUser);

// messages
router.post('/messages', messagecontrller.CreateMessage)
router.get('/messages', messagecontrller.getAllMessage)
router.get('/messages/:id',messagecontrller.getMessage )  
router.delete('/messages/delete/:id',messagecontrller.deleteMessage )


export default router;
