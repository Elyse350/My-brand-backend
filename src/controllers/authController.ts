import userModel from "../db/userModel";
import express, { Request, Response } from "express";
import TokenAuth from "../helpers/tokenAuth";
import bcrypt from 'bcrypt';

class UserController {
    static async createUser(request: Request, response: Response) {
        const hashPassword = bcrypt.hashSync(request.body.password, 10);
        request.body.password = hashPassword;

        try {
            const user = await userModel.create(request.body);
            return response.status(200).json({ message: "User created successfully", data: user });
        } catch (error) {
            return response.status(500).json({ error: "Failed to create user" });
        }
    }

    static async getAllUsers(request: Request, response: Response) {
        try {
            const users = await userModel.find();
            return response.status(200).json({ message: "Successfully retrieved users", data: users });
        } catch (error) {
            return response.status(500).json({ error: "Failed to get users" });
        }
    }

    static async getOneUser(request: Request, response: Response) {
        try {
            const user = await userModel.findById(request.params.id);
            if (!user) {
                return response.status(404).json({ error: "User not found" });
            }
            return response.status(200).json({ message: "User found successfully", data: user });
        } catch (error) {
            return response.status(500).json({ error: "Failed to get user" });
        }
    }

    static async deleteOneUser(request: Request, response: Response) {
        try {
            const user = await userModel.findByIdAndDelete(request.params.id);
            if (!user) {
                return response.status(404).json({ error: "User not deleted" });
            }
            return response.status(200).json({ message: "User deleted successfully", data: user });
        } catch (error) {
            return response.status(500).json({ error: "Failed to delete user" });
        }
    }
    static async userLogin(request: Request, response: Response){
        const user=await userModel.findOne({email:request.body.email});
        console.log(user)
        if(!user){
          return response.status(404).json({error:"user not found! kindly register first"})
        }
        if(bcrypt.compareSync(request.body.password,user.password)){
          user.password;
          const token=TokenAuth.TokenGenerator({user:user});
          return response.status(200).json({message:"successfully logged in",token:token});
        }

        return response.status(404).json({error:"Password incorrect!"})
    }
}

export default UserController;
