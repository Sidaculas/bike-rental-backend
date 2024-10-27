import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { userServices } from './user.services'

const registerUser = catchAsync(async (req, res) => {
  const result = userServices.registerUserIntoDb(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User registered successfully',
    data: result,
  })
})

export const userController = {
  registerUser,
}
