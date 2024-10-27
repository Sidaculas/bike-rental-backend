import { z } from 'zod'

const bookingValidationSchema = z.object({
  body: z.object({
    userId: z
      .string({
        invalid_type_error: 'userId must be a string',
      })
      .optional(),
    bikeId: z.string({
      invalid_type_error: 'bikeId must be a string',
      required_error: 'bikeId is required',
    }),
    startTime: z.string().datetime({
      message: 'startTime must be a valid string year-month-day',
    }),
    returnTime: z
      .string()
      .datetime({
        message: 'returnTime must be a valid string',
      })
      .nullable()
      .default(null),
    totalCost: z
      .number({
        invalid_type_error: 'totalCost must be a number',
        required_error: 'totalCost is required',
      })
      .default(0),
    isReturned: z
      .boolean({
        invalid_type_error: 'isReturned must be a boolean',
      })
      .default(false)
      .optional(),
  }),
})

const updateBookingValidationSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    bikeId: z.string().optional(),
    startTime: z.string().datetime().optional(),
    returnTime: z.string().datetime().optional(),
    totalCost: z.number().optional(),
    isReturned: z.boolean().optional(),
  }),
})

export const bookingValidations = {
  bookingValidationSchema,
  updateBookingValidationSchema,
}
