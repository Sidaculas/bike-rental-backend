"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidations = void 0;
const zod_1 = require("zod");
const bookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z
            .string({
            invalid_type_error: 'userId must be a string',
        })
            .optional(),
        bikeId: zod_1.z.string({
            invalid_type_error: 'bikeId must be a string',
            required_error: 'bikeId is required',
        }),
        startTime: zod_1.z.string().datetime({
            message: 'startTime must be a valid string year-month-day',
        }),
        returnTime: zod_1.z
            .string()
            .datetime({
            message: 'returnTime must be a valid string',
        })
            .nullable()
            .default(null),
        totalCost: zod_1.z
            .number({
            invalid_type_error: 'totalCost must be a number',
            required_error: 'totalCost is required',
        })
            .default(0),
        isReturned: zod_1.z
            .boolean({
            invalid_type_error: 'isReturned must be a boolean',
        })
            .default(false)
            .optional(),
    }),
});
const updateBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        bikeId: zod_1.z.string().optional(),
        startTime: zod_1.z.string().datetime().optional(),
        returnTime: zod_1.z.string().datetime().optional(),
        totalCost: zod_1.z.number().optional(),
        isReturned: zod_1.z.boolean().optional(),
    }),
});
exports.bookingValidations = {
    bookingValidationSchema,
    updateBookingValidationSchema,
};
