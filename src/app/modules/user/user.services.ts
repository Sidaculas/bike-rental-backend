import { IUser } from './user.interface'
import { User } from './user.model'

const registerUserIntoDb = async (payload: IUser) => {
  const result = User.create(payload)

  return result
}

export const userServices = {
  registerUserIntoDb,
}
