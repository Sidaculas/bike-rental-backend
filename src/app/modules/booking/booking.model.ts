import { model, Schema } from 'mongoose'
import { IBooking } from './booking.interface'

const bookingSchema = new Schema<IBooking>({
  userId: String,
  bikeId: {
    type: Schema.Types.ObjectId,
    ref: 'Bike',
    required: true,
  },
  startTime: { type: Date, required: true },
  returnTime: { type: Date, default: null },
  totalCost: { type: Number, required: true },
  isReturned: { type: Boolean, default: false },
})

export const Booking = model<IBooking>('Booking', bookingSchema)
