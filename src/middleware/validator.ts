import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import userModel from '../db/userModel';

class Validator {
    public static validateInput(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.array().map((err) => err.msg);
            return res.status(400).json({ message: errorMessage });
        }
        return next();
    }

    public static newAccountRules(): any[] {
        return [
            check("email", "email is valid").trim()
                .isEmail()
                .custom((value) => {
                    return userModel.find({ email: value })
                        .then((user) => {
                            if (user && user.length > 0) {
                                return Promise.reject('Email has already been taken');
                            }
                        });
                }),
            check("password", "password is not strong").trim().isStrongPassword(),
            check("lastName", "last name should be valid").trim().isAlpha(),
            check("firstName", "first name should be valid").trim().isAlpha(),
            check("gender", "gender should be valid among male, female, other, not-say").trim().isIn(["male", "female", "other", "not-say"]),
        ];
    }
}

export default Validator;
