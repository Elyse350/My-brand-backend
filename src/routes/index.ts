/**
 * @openapi
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       required:
 *         -  email
 *         -  password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of userd
 *         firstName:
 *           type: string
 *           description: The firstname of user
 *         lastName:
 *           type: string
 *           description: The lastname of user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: the password
 *         address:
 *           type: string
 *           description: the user address
 *         gender:
 *           type: string
 *           description: the user gender
 *         role:
 *           type: string
 *           description: the role of the user
 */



/**
 *  @openapi
 * tags:
 *   name: user
 *   description: The Users managing API
 * /user:
 *   get:
 *     summary: Lists all the users
 *     tags: [user]
 *     responses:
 *       200:
 *         description: All users who signed up
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/user'
 *       403:
 *         description: Admin privileges needed
 * /user/{id}:
 *   get:
 *     summary: Get a user by id
 *     tags: [user]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user as a response by id
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/user'
 *       403:
 *         description: Admin Privileges needed or The user was not found
 *   patch:
 *     summary: Update a user by id
 *     tags: [user]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/user'
 *       403:
 *         description: Admin Privileges needed or The user was not found
 *   delete:
 *     summary: Remove a user by id
 *     tags: [user]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user has been removed
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/user'
 *       403:
 *         description: Admin Privileges needed or The user was not found
 */
import express, { Router } from "express";
import employeeController from "../controllers/employeeController";
import messagecontrller from '../controllers/messegeController'
import BlogController from '../controllers/blogController';
import UserController from '../controllers/authController';
import Validator from "../middleware/validator";
import DataChecker from "../middleware/datachecker";
import VerifyToken from "../middleware/verifyToken";
// import VerifyAccess from "../middleware/veriftAccess";
// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerui from "swagger-ui-express"

const router: Router = express.Router();


// Employee routes
// router.get("/employee", employeeController.getAllEmployee);
// router.get("/employee/:id", employeeController.getEmployee);
// router.post("/employee", employeeController.CreateEmployee);
// router.put("/employee/:id", employeeController.updateEmployee);
// router.delete("/employee/:id", employeeController.deleteEmployee);

// Blog routes
router.post('/blogs',

    Validator.validateInput,  BlogController.CreateBlog);
router.get('/blogs', BlogController.getAllBlog);
router.get('/blogs/:id', BlogController.getBlog);
router.put('/blogs/:id', BlogController.updateBlog);
router.delete('/blogs/:id', BlogController.deleteBlog);

/**
 * @openapi
 * components:
 *   schemas:
 *     blogs:
 *       type: object
 *       required:
 *         -  title
 *         -  content
 *         -  author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         content:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book explanation
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 */
/**
 *  @openapi
 * tags:
 *   name: blogs
 *   description: The Blogs managing API
 * /blogs:
 *   get:
 *     summary: Lists all the blogs
 *     tags: [blogs]
 *     responses:
 *       200:
 *         description: All blogs that were posted
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/blogs'
 *       403:
 *         description: Admin privileges needed
 *   post:
 *     summary: Creates a blog
 *     tags: [blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/blogs'
 *     responses:
 *       200:
 *         description: The created Blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *       403:
 *         description: Admin privileges needed
 * /blogs/{id}:
 *   get:
 *     summary: Get a blog by id
 *     tags: [blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog id
 *     responses:
 *       200:
 *         description: The blog as a response by id
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/blog'
 *       403:
 *         description: Admin Privileges needed or The blog was not found
 *   patch:
 *     summary: Update a blog by id
 *     tags: [blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Blog id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/blogs'
 *     responses:
 *       200:
 *         description: The blog was updated
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/blogs'
 *       403:
 *         description: Admin Privileges needed or The blog was not found
 *   delete:
 *     summary: Remove a blog by id
 *     tags: [blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog id
 *     responses:
 *       200:
 *         description: The blog has been removed
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/blogs'
 *       403:
 *         description: Admin Privileges needed or The blog was not found
 */

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
