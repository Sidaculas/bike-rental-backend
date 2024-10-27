import { z } from 'zod'

const bikeValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required',
  }),
  description: z.string({
    invalid_type_error: 'Description must be a string',
    required_error: 'Description is required',
  }),
  pricePerHour: z.number({
    invalid_type_error: 'Price per hour must be a number',
    required_error: 'Price per hour is required',
  }),
  isAvailable: z.boolean({
    invalid_type_error: 'isAvailable must be true or false',
    required_error: 'isAvailable is required',
  }),
  cc: z.number({
    invalid_type_error: 'cc must be a number',
    required_error: 'cc is required',
  }),
  year: z.string({
    invalid_type_error: 'Year must be a string',
    required_error: 'Year is required',
  }),
  model: z.string({
    invalid_type_error: 'Model must be a string',
    required_error: 'Model is required',
  }),
  brand: z.string({
    invalid_type_error: 'Brand must be a string',
    required_error: 'Brand is required',
  }),
})

const updateBikeValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  pricePerHour: z.number().optional(),
  isAvailable: z.boolean().optional(),
  cc: z.number().optional(),
  year: z.string().optional(),
  model: z.string().optional(),
  brand: z.string().optional(),
})

export const bikeValidations = {
  bikeValidationSchema,
  updateBikeValidationSchema,
}
