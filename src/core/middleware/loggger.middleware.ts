import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = new Date().getTime();
    console.log(`n[${req.method.toUpperCase()}] ${req.baseUrl}`);
    console.log(`[QUERY]`, req.query);
    console.log(`[BODY]`, req.body);
    req.on('finish', () => {
      const endTime = new Date().getTime();
      if (res.statusCode) {
        console.log(`[STATUS]`, res.statusCode);
      }

      console.log(`[TIME] ${startTime - endTime} ms`);
    });
    next();
  }
}
