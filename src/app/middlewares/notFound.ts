import { NextFunction, Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'

const notFound: RequestHandler = (
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    message: 'Not found',
  })
}

export default notFound
