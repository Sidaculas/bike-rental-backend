import { z } from 'zod'

const bookingValidationSchema = z.object({
  userId: z.string({
    invalid_type_error: 'userId must be a string',
    required_error: 'userId is required',
  }),
  bikeId: z.string({
    invalid_type_error: 'bikeId must be a string',
    required_error: 'bikeId is required',
  }),
  startTime: z
    .date({
      invalid_type_error: 'startTime must be a valid date year-month-day',
      required_error: 'startTime is required',
    })
    .or(
      z
        .string()
        .datetime({
          message: 'startTime must be a valid string year-month-day',
        }),
    ),
  returnTime: z
    .date({
      invalid_type_error: 'returnTime must be a valid date',
      required_error: 'returnTime is required',
    })
    .or(
      z.string().datetime({
        message: 'returnTime must be a valid ISO datetime string',
      }),
    ),
  totalCost: z.number({
    invalid_type_error: 'totalCost must be a number',
    required_error: 'totalCost is required',
  }),
  isReturned: z
    .boolean({
      invalid_type_error: 'isReturned must be a boolean',
    })
    .optional(),
})

const updateBookingValidationSchema = z.object({
  userId: z.string().optional(),
  bikeId: z.string().optional(),
  startTime: z.date().or(z.string().datetime()).optional(),
  returnTime: z.date().or(z.string().datetime()).optional(),
  totalCost: z.number().optional(),
  isReturned: z.boolean().optional(),
})

export const bookingValidations = {
  bookingValidationSchema,
  updateBookingValidationSchema,
}
