// import jwt from 'jsonwebtoken';
// import asyncHandler from 'express-async-handler';

// import User from '../model/userModel';

// const protect = asyncHandler(async (req, res, next) => {
//   let token;
//   token = req.cookies.jwt;

//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user - (await User.findById(decoded.userId).select('-password'));
//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(401);
//       throw new Error('Not authorized, token failed');
//     }
//   } else {
//     res.status(401);
//     throw new Error('Not authorized, no token');
//   }
// });

// export { protect };

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import User, { UserDocument } from '../models/userModel';

interface CustomRequest extends Request {
  user?: UserDocument | null;
}
interface DecodedToken {
  userId: string;
}

const protect = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  let token: string | undefined;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as DecodedToken;
      req.user = await User.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
};
// User must be an admin
const admin = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

export { protect, admin };
