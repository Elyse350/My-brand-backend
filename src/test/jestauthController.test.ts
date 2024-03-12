import UserController from '../controllers/authController';
import userModel from '../db/userModel';

describe('UserController', () => {
    // Mocking request and response objects for testing
    const request: any = {};
    const response: any = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    beforeAll(() => {
        // Mock any necessary setup before running the tests
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new user successfully', async () => {
        const newUser = { email: 'test@example.com', password: 'password123' };

        userModel.create = jest.fn().mockResolvedValue(newUser);

        request.body = newUser;
        await UserController.createUser(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith({ message: 'User created successfully', data: newUser });
    });

    // Add similar test cases for other methods like getAllUsers, getOneUser, deleteOneUser, and userLogin
});
