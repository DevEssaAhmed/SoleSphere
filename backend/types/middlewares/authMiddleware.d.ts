/// <reference types="qs" />
import { Request, Response, NextFunction } from 'express';
import { UserDocument } from '../models/userModel';
interface CustomRequest extends Request {
    user?: UserDocument | null;
}
declare const protect: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
declare const admin: (req: CustomRequest, res: Response, next: NextFunction) => void;
export { protect, admin };
