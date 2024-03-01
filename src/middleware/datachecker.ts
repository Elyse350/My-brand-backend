import { Request, Response, NextFunction } from 'express';
import userModel from '../db/userModel';

class DataChecker {
    public static async isEmailExist(req: Request, res: Response, next: NextFunction): Promise<void> {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return next();
        }
        res.status(401).json({ error: "email already exists you must try another!" });
    }
}

export default DataChecker;
