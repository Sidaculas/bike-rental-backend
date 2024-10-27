import mongoose from 'mongoose'
import { IErrorSource, IGenericError } from '../interface/errSource'

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericError => {
  const errorSource: IErrorSource[] = Object.values(err.errors).map(
    (err: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: err?.path,
        message: err?.message,
      }
    },
  )

  const statusCode = 400

  return {
    statusCode,
    message: 'Validation Error',
    errorSource,
  }
}

export default handleValidationError
