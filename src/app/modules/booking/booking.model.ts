import { model, Schema } from 'mongoose'
import { IBooking } from './booking.interface'

const bookingSchema = new Schema<IBooking>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bikeId: {
    type: Schema.Types.ObjectId,
    ref: 'Bike',
    required: true,
  },
  startTime: { type: Date, required: true },
  returnTime: { type: Date, required: true },
  totalCost: { type: Number, required: true },
  isReturned: { type: Boolean, default: false },
})

export const Booking = model<IBooking>('Booking', bookingSchema)
