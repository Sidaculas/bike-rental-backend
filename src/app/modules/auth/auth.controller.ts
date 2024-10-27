import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const loginUser = catchAsync(async (req, res) => {
  const result = 'df'

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    data: result,
  })
})
export const AuthController = {
  loginUser,
}
