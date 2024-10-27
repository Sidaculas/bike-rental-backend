// import { Types } from 'mongoose'
import { IBike } from './bike.interface'
import { Bike } from './bike.model'
// import AppError from '../../errors/AppError'

const createBikeIntoDb = async (payload: IBike) => {
  const result = await Bike.create(payload)
  return result
}

const getAllBikeFromDb = async () => {
  const result = await Bike.find()
  return result
}
const updateBikeFromDb = async (id: string, payload: Partial<IBike>) => {
  // temp validation
  // if (!Types.ObjectId.isValid(id)) {
  //   throw new AppError(404, 'Invalid ID format')
  // }

  const result = await Bike.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}
const deleteBikeFromDb = async (id: string) => {
  const bike = await Bike.findByIdAndDelete(id)
  return bike
}
export const bikeServices = {
  createBikeIntoDb,
  getAllBikeFromDb,
  updateBikeFromDb,
  deleteBikeFromDb,
}
