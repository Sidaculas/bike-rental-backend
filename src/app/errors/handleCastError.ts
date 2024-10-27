import mongoose from 'mongoose'
import { IErrorSource, IGenericError } from '../interface/errSource'

const handleCastError = (err: mongoose.Error.CastError): IGenericError => {
  const errorSource: IErrorSource[] = [
    {
      path: err.path,
      message: err.message,
    },
  ]

  const statusCode = 400

  return {
    statusCode,
    message: 'Cast Error',
    errorSource,
  }
}

export default handleCastError
