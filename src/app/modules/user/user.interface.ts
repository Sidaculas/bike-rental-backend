import { userRole } from './user.constants'

export interface IUser {
  name: string
  email: string
  password: string
  phone: string
  address: string
  role: keyof typeof userRole
}
