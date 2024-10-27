import { Types } from 'mongoose'

export interface IBooking {
  userId: string
  bikeId: Types.ObjectId
  startTime: Date
  returnTime: Date | null
  totalCost: number
  isReturned: boolean
}
