"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidations = void 0;
const zod_1 = require("zod");
const user_constants_1 = require("./user.constants");
const userValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'Name must be a string',
            required_error: 'Name is required',
        }),
        email: zod_1.z
            .string({
            invalid_type_error: 'Email must be a string',
            required_error: 'Email is required',
        })
            .email('Invalid email format'),
        password: zod_1.z
            .string({
            invalid_type_error: 'Password must be a string',
            required_error: 'Password is required',
        })
            .min(6, 'Password must be at least 6 characters long'),
        phone: zod_1.z.string({
            invalid_type_error: 'Phone must be a string',
            required_error: 'Phone is required',
        }),
        address: zod_1.z.string({
            invalid_type_error: 'Address must be a string',
            required_error: 'Address is required',
        }),
        role: zod_1.z
            .nativeEnum(user_constants_1.userRole, {
            invalid_type_error: 'Role must be either "admin" or "user"',
            required_error: 'Role is required',
        })
            .default(user_constants_1.userRole.user),
    }),
});
const updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email('Invalid email format').optional(),
        phone: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
    }),
});
exports.userValidations = {
    userValidationSchema,
    updateUserValidationSchema,
};
