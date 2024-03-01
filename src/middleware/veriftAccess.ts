// import { Request, Response, NextFunction } from 'express';

// const VerifyAccess = (RequireRole: string) => {
//     return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//         try {
//             const { Role } = req.user;
//             if (RequireRole !== Role) {
//                 res.status(403).json("You don't have permission to perform this action.");
//                 return;
//             }
//             next();
//         } catch (err) {
//             console.log("error:", err);
//             res.status(500).json({ error: "Internal Server Error" });
//         }
//     };
// };

// export default VerifyAccess;
