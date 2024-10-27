import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { IErrorSource } from '../interface/errSource'
import { ZodError } from 'zod'
import handleZodError from '../errors/handleZodError'

import config from '../config'
import handleCastError from '../errors/handleCastError'
import handleValidationError from '../errors/handleValidationError'

// added void and error request handler as app.use() was not recognizing this function as error request handler.
const globalErrorHandler: ErrorRequestHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void => {
  let statusCode = err.statusCode || 500
  let message = err.message || 'Something went wrong'

  let errorSource: IErrorSource[] = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ]

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorSource = simplifiedError?.errorSource
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorSource = simplifiedError?.errorSource
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorSource = simplifiedError?.errorSource
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    stack: config.node_env === 'development' ? err?.stack : null,
  })
}

export default globalErrorHandler
