"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidations = void 0;
const zod_1 = require("zod");
const bikeValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'Name must be a string',
            required_error: 'Name is required',
        }),
        description: zod_1.z.string({
            invalid_type_error: 'Description must be a string',
            required_error: 'Description is required',
        }),
        pricePerHour: zod_1.z.number({
            invalid_type_error: 'Price per hour must be a number',
            required_error: 'Price per hour is required',
        }),
        isAvailable: zod_1.z
            .boolean({
            invalid_type_error: 'isAvailable must be true or false',
        })
            .default(true),
        cc: zod_1.z.number({
            invalid_type_error: 'cc must be a number',
            required_error: 'cc is required',
        }),
        year: zod_1.z.number({
            invalid_type_error: 'Year must be a string',
            required_error: 'Year is required',
        }),
        model: zod_1.z.string({
            invalid_type_error: 'Model must be a string',
            required_error: 'Model is required',
        }),
        brand: zod_1.z.string({
            invalid_type_error: 'Brand must be a string',
            required_error: 'Brand is required',
        }),
    }),
});
const updateBikeValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        pricePerHour: zod_1.z.number().optional(),
        isAvailable: zod_1.z.boolean().optional(),
        cc: zod_1.z.number().optional(),
        year: zod_1.z.number().optional(),
        model: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
    }),
});
exports.bikeValidations = {
    bikeValidationSchema,
    updateBikeValidationSchema,
};
