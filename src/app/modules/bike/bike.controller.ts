import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { Bike } from './bike.model'
import { bikeServices } from './bike.service'
import httpStatus from 'http-status'

const createBike = catchAsync(async (req, res) => {
  const result = await bikeServices.createBikeIntoDb(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike added successfully',
    data: result,
  })
})
const getAllBike = catchAsync(async (req, res) => {
  const result = await bikeServices.getAllBikeFromDb()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike retrieved successfully',
    data: result,
  })
})
const updateBike = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await bikeServices.updateBikeFromDb(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike updated successfully',
    data: result,
  })
})

const deleteBike = catchAsync(async (req, res) => {
  // this could be also implemented in "pre" middleware where it would check if the bike exists or not.
  const { id } = req.params
  const bike = await Bike.findById(id)
  if (!bike) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No data found',
      data: [],
    })
  }
  const result = await bikeServices.deleteBikeFromDb(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike deleted successfully',
    data: result,
  })
})

export const bikeController = {
  createBike,
  getAllBike,
  updateBike,
  deleteBike,
}
