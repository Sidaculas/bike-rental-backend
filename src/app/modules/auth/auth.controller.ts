import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from './auth.service'
import config from '../../config'

const register = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUserIntoDb(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User registered successfully',
    data: result,
  })
})

const login = catchAsync(async (req, res) => {
  const { accessToken, refreshToken } = await AuthServices.loginUser(req.body)

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: config.node_env === 'production',
  })

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    data: { accessToken },
  })
})

// temp code to test password not showing

// const findUser = catchAsync(async (req, res) => {
//   const result = await userServices.findAllUserIntoDb()

//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.CREATED,
//     message: 'User fetched successfully',
//     data: result,
//   })
// })

export const AuthController = {
  login,
  register,
}
