import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { bookingServices } from './booking.services'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../../config'
import { User } from '../user/user.model'
import { Types } from 'mongoose'

const createRental = catchAsync(async (req, res) => {
  let refreshToken = req.cookies.refreshToken
  refreshToken = refreshToken.split(' ')[1]

  const verifiedToken = jwt.verify(
    refreshToken as string,
    config.jwt_refresh_secret as string,
  )

  const { email } = verifiedToken as JwtPayload
  const user = await User.findOne({ email })

  const userId = user?._id as Types.ObjectId
  const result = await bookingServices.createRentalIntoDb(userId, req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rental created successfully',
    data: result,
  })
})

const getAllRentals = catchAsync(async (req, res) => {
  const result = await bookingServices.getAllRentalFromDb()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rentals retrieved successfully',
    data: result,
  })
})

const returnBike = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await bookingServices.returnBikeFromDb(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rentals returned successfully',
    data: result,
  })
})

export const bookingController = {
  createRental,
  getAllRentals,
  returnBike,
}
