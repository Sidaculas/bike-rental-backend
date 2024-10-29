import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { userServices } from './user.services'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../../config'

const createAdmin = catchAsync(async (req, res) => {
  const admin = await userServices.createAdminIntoDb(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Admin created successfully',
    data: admin,
  })
})

const getUser = catchAsync(async (req, res) => {
  let { refreshToken } = req.cookies
  refreshToken = refreshToken.split(' ')[1]
  const verifiedToken = jwt.verify(
    refreshToken as string,
    config.jwt_refresh_secret as string,
  )

  const { email } = verifiedToken as JwtPayload

  const user = await userServices.getUserFromDb(email)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User profile retrieved successfully',
    data: user,
  })
})

const updateUser = catchAsync(async (req, res) => {
  let { refreshToken } = req.cookies
  refreshToken = refreshToken.split(' ')[1]
  const verifiedToken = jwt.verify(
    refreshToken as string,
    config.jwt_refresh_secret as string,
  )

  const { email } = verifiedToken as JwtPayload

  const user = await userServices.updateUserFromDb(email, req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Profile updated successfully',
    data: user,
  })
})

export const userController = {
  createAdmin,
  getUser,
  updateUser,
}
