import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { bookingServices } from './booking.services'

const createRental = catchAsync(async (req, res) => {
  const result = await bookingServices.createRentalIntoDb(req.body)

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
  const result = await bookingServices.returnBikeFromDb(id, req.body)

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
