import config from '../../config'
import AppError from '../../errors/AppError'
import { userRole } from '../user/user.constants'
import { IUser } from '../user/user.interface'
import { User } from '../user/user.model'
import { ILoginUser } from './auth.interface'
import { isPasswordMatched } from './auth.utils'
import jwt from 'jsonwebtoken'

const registerUserIntoDb = async (payload: IUser) => {
  const user = await User.findOne({ email: payload.email })

  if (user) {
    throw new AppError(409, 'User already exists')
  }

  //explicitly making a user.
  payload.role = userRole.user
  const newUser = await User.create(payload)
  return newUser
}

const loginUser = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password')

  if (!user) {
    throw new AppError(404, 'User not found')
  }

  const passwordMatched = await isPasswordMatched(
    payload.password,
    user.password,
  )

  if (!passwordMatched) {
    throw new Error('Password not matched')
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  })

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in,
    },
  )

  return {
    accessToken: `Bearer ${accessToken}`,
    refreshToken: `Bearer ${refreshToken}`,
  }
}

// temp code to test password not showing
// const findAllUserIntoDb = async () => {
//   const result = await User.find()
//   return result
// }

export const AuthServices = {
  registerUserIntoDb,
  loginUser,
  //   findAllUserIntoDb,
}
