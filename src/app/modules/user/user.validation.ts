import { z } from 'zod'
import { userRole } from './user.constants'

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
      required_error: 'Name is required',
    }),
    email: z
      .string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
      })
      .email('Invalid email format'),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
        required_error: 'Password is required',
      })
      .min(6, 'Password must be at least 6 characters long'),
    phone: z.string({
      invalid_type_error: 'Phone must be a string',
      required_error: 'Phone is required',
    }),
    address: z.string({
      invalid_type_error: 'Address must be a string',
      required_error: 'Address is required',
    }),
    role: z
      .nativeEnum(userRole, {
        invalid_type_error: 'Role must be either "admin" or "user"',
        required_error: 'Role is required',
      })
      .default(userRole.user),
  }),
})

const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
})

export const userValidations = {
  userValidationSchema,
  updateUserValidationSchema,
}
