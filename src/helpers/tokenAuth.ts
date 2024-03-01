import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class TokenAuth {
  static TokenGenerator(data: any): string {
    const token: string = jwt.sign(data, process.env.JWT_KEY || '');
    return token;
  }

  static decodeToken(token: string): any {
    const data: any = jwt.verify(token, process.env.JWT_KEY || '');
    return data;
  }
}

export default TokenAuth;
