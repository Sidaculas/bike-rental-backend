import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'
import { userRole } from './user.constants'

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  role: {
    type: String,
    enum: Object.keys(userRole),
    required: true,
  },
})

export const User = model<IUser>('User', userSchema)
