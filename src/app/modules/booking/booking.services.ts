import AppError from '../../errors/AppError'
import { Bike } from '../bike/bike.model'
import { IBooking } from './booking.interface'
import { Booking } from './booking.model'

const createRentalIntoDb = async (payload: Partial<IBooking>) => {
  // checking if the bike is available
  const { bikeId } = payload
  const bike = await Bike.findById(bikeId)

  if (!bike || !bike?.isAvailable) {
    throw new AppError(400, 'This bike is not available')
  }
  //temp user id
  // temp code testing
  const userId = '12345'
  const cPayload = {
    ...payload,
    userId,
  }

  const result = await Booking.create(cPayload)

  // setting bike available status to false

  bike.isAvailable = false
  await bike.save()

  return result
}
const getAllRentalFromDb = async () => {
  const result = await Booking.find()
  return result
}
const returnBikeFromDb = async (id: string) => {
  //checking if the rent is valid and exists in database
  const rent = await Booking.findById(id)
  if (!rent) {
    throw new AppError(404, 'Rental Not Found')
  }
  // checking if the bike is already returned
  if (rent.isReturned) {
    throw new AppError(404, 'Bike already returned')
  }

  // fetching bike details
  const bike = await Bike.findById(rent.bikeId)
  if (!bike) {
    throw new AppError(404, 'Bike not found')
  }

  // calculating cost
  const currentTime = new Date()

  const rentTime =
    Math.ceil(currentTime.getTime() - rent.startTime.getTime()) /
    (1000 * 60 * 60)
  //   console.log(currentTime.getTime(), rentTime)
  const totalCost = rentTime * bike.pricePerHour

  // updating isAvailable
  bike.isAvailable = true
  await bike.save()

  // updating rent
  rent.returnTime = currentTime
  rent.totalCost = totalCost
  rent.isReturned = true
  await rent.save()
}

export const bookingServices = {
  createRentalIntoDb,
  getAllRentalFromDb,
  returnBikeFromDb,
}
