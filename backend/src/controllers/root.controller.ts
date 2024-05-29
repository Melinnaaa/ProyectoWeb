import { Request, Response } from 'express';

export const rootHandler = (req: Request, res: Response) => {
  res.json({
    msg: 'API Working'
  });
};
