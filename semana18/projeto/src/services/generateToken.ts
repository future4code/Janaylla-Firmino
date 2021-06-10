import * as jwt from "jsonwebtoken";
import {authenticationData} from '../types';
import dotenv from "dotenv";

dotenv.config();
  const expiresIn = "2h";
  export  const generateToken = (input: authenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
}

export const getData = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id
  };
  return result;
};