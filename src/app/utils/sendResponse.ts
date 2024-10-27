import { Response } from 'express'

export interface IResponse<T> {
  statusCode: number
  message?: string
  success: boolean
  data: T
}

const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  return res.status(data?.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  })
}

export default sendResponse
