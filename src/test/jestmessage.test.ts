import { Request, Response } from 'express';
import messagecontrller from '../controllers/messegeController'; // Corrected import path
import MessageModel from '../db/messege'; // Corrected import path

describe('MessageController', () => {
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

  it('should create a message', async () => {
    const messageData = {
      name: 'John Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      message: 'Test message content',
    };

    const messageInstance = new MessageModel(messageData);
    jest.spyOn(MessageModel.prototype, 'save').mockResolvedValue(messageInstance);

    mockRequest.body = messageData as Request['body'];
    
    await messagecontrller.CreateMessage(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
  // expect(mockResponse.json).toHaveBeenCalledWith({ message: 'message created', data: messageInstance });
  });

  // Add similar test cases for other methods like getAllMessage, getMessage, and deleteMessage
});
