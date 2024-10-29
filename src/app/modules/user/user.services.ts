import { IUser } from './user.interface'
import { User } from './user.model'

const createAdminIntoDb = async (payload: IUser) => {
  const admin = await User.findOne({ email: payload.email })
  if (admin) {
    throw new Error('Admin already exists')
  }
  const newAdmin = await User.create(payload)

  return newAdmin
}

const getUserFromDb = async (email: string) => {
  const user = User.findOne({ email })
  return user
}
const updateUserFromDb = async (email: string, payload: Partial<IUser>) => {
  const user = User.findOneAndUpdate({ email }, payload, {
    new: true,
    runValidators: true,
  })
  return user
}

export const userServices = {
  createAdminIntoDb,
  getUserFromDb,
  updateUserFromDb,
}
