import { z } from 'zod'

const loginValidationSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string({ required_error: 'Password is required' }),
})

export const AuthValidation = {
  loginValidationSchema,
}
