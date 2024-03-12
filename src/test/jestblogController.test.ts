import { Request, Response } from 'express';
import BlogController from '../controllers/blogController';
import BlogModel from '../db/blogModel';
import jest from 'jest'; // Import jest module

describe('BlogController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      sendStatus: jest.fn(),
    };
  });

  it('should create a blog', async () => {
    const blogData = {
      title: 'Test Blog',
      content: 'This is a test blog content',
      author: 'Test Author',
      createdAt: new Date(),
    };
  
    const blogInstance = new BlogModel(blogData);
    jest.spyOn(BlogModel.prototype, 'save').mockResolvedValue(blogInstance);
  
    mockRequest.body = blogData as Request['body'];
    
    await BlogController.CreateBlog(mockRequest as Request, mockResponse as Response);
  
    expect(mockResponse.status).toHaveBeenCalledWith(200);

  });
  
  // Add similar test cases for other methods like getAllBlog, getBlog, updateBlog, and deleteBlog
});
