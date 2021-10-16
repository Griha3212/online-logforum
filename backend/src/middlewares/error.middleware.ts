/* eslint-disable consistent-return */
/* eslint-disable no-console */
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err) return next();
  if (res.headersSent) {
    return next(err);
  }
  let status;
  let error;
  if (/ValidationError:/.test(err.message)) {
    status = 400;
    error = err.message;
  } else if (/Unauthorized|invalid signature/.test(err.message)) {
    status = 401;
    error = `${err.name}: ${err.message}`;
  } else {
    status = 500;
    error = err.message;
  }
  console.log(chalk.white.bgRed.bold(`error: ${error}`));
  // console.log('error', error);
  res.status(status).json({ error });
};

export default errorHandler;
