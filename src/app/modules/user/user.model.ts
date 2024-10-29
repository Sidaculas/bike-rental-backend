import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'
import { userRole } from './user.constants'
import bcrypt from 'bcrypt'
import config from '../../config'

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: Object.keys(userRole),
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_rounds))
  next()
})

userSchema.post('save', async function (doc, next) {
  doc.password = ''
  next()
})

export const User = model<IUser>('User', userSchema)
