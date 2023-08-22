import { Response } from 'express';
declare const generateToken: (res: Response, userId: string) => void;
export default generateToken;
