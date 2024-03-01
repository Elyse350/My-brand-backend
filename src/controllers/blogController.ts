import express, { Request, Response } from 'express';
import BlogModel from '../db/blogModel';
// 
class BlogController {
    CreateBlog = async (request: express.Request, response: express.Response) => {
        try {
            const { title, content, author, createdAt } = request.body;
            const blog = new BlogModel({
                title,
                content,
                author,
                createdAt
            });
            await blog.save();
            return response.status(200).json({ messenge: "blog created", data: blog })

        } catch (error) {
            return response.sendStatus(400);
        }
    }

    getAllBlog = async (request: express.Request, response: express.Response) => {
        try {
            const blogs = await BlogModel.find();
            return response.status(200).json({ data: blogs })

        } catch (error) {
            return response.sendStatus(400);
        }
    }
    getBlog = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const blog = await BlogModel.findById(id);
            return response.status(200).json({ data: blog })

        } catch (error) {
            return response.sendStatus(400);
        }
    }
    updateBlog = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const {  title, content, author, createdAt } = request.body;

            const blog = await BlogModel.findById(id);
            if (blog) {
                blog.title = title;
                blog.content = content;
                blog.author = author;
                blog.createdAt = createdAt
              
                await blog.save();
                return response.status(200).json({ messenge: "blog updated", data: blog })
            }

            return response.sendStatus(400);
        } catch (error) {
            return response.sendStatus(400);
        }
    }
    deleteBlog = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            await BlogModel.findByIdAndDelete({ id: id });
            return response.status(200).json({ data: "blog deleted" })

        } catch (error) {
            return response.sendStatus(400);
        }
    }
}
export default new BlogController();