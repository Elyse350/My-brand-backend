import { Request, Response, NextFunction } from 'express';
import TokenAuth from '../helpers/tokenAuth';

interface CustomRequest extends Request {
    user?: any; // Define the structure of the user object or use a specific type if available
}

const VerifyToken = (req: CustomRequest, res: Response, next: NextFunction): Response | void => {
    const token = req.body.token || req.query.token || req.headers["x-auth-token"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const user = TokenAuth.decodeToken(token);
        req.user = user.user; // Assuming user is an object with 'user' property
        return next();
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
};

export default VerifyToken;
