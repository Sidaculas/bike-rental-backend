import { IBooking } from './booking.interface'
import { Booking } from './booking.model'

const createRentalIntoDb = async (payload: Partial<IBooking>) => {
  const result = await Booking.create(payload)
  return result
}
const getAllRentalFromDb = async () => {
  const result = await Booking.find()
  return result
}
const returnBikeFromDb = async (id: string, payload: IBooking) => {
  const result = await Booking.findByIdAndUpdate(id, payload, { new: true })
  return result
}

export const bookingServices = {
  createRentalIntoDb,
  getAllRentalFromDb,
  returnBikeFromDb,
}
