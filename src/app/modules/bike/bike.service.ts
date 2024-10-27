import { IBike } from './bike.interface'
import { Bike } from './bike.model'

const createBikeIntoDb = async (payload: IBike) => {
  const result = await Bike.create(payload)
  return result
}

const getAllBikeFromDb = async () => {
  const result = await Bike.find()
  return result
}
const updateBikeFromDb = async (id: string) => {
  const result = await Bike.findByIdAndUpdate(id, { new: true })
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
