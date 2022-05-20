import { NextFunction, Request, Response } from 'express';

export class HealthCheckController {
  healthCheck = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: 'Battlefront Companion API is up and running' });
  };
}
