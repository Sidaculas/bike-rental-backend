import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import { User } from '../modules/user/user.model'
import AppError from '../errors/AppError'
import { userRole } from '../modules/user/user.constants'
import catchAsync from '../utils/catchAsync'

export const Auth = (...requiredRoles: (keyof typeof userRole)[]) => {
  return catchAsync(async (req, res, next) => {
    const accessToken = req.headers.authorization?.split(' ')[1]
    if (!accessToken) {
      throw new AppError(401, 'You have no access to this route')
    }
    const verifiedToken = jwt.verify(
      accessToken as string,
      config.jwt_access_secret as string,
    )

    const { role, email } = verifiedToken as JwtPayload
    const user = await User.findOne({ email })

    if (!user) {
      throw new AppError(401, 'User not found')
    }

    if (user.role !== role) {
      throw new AppError(401, 'You have no access to this route')
    }

    if (!requiredRoles.includes(role)) {
      throw new AppError(401, 'You have no access to this route')
    }

    next()
  })
}
