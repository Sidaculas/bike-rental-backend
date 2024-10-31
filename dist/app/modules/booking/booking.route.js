"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booking_validation_1 = require("./booking.validation");
const booking_controller_1 = require("./booking.controller");
const Auth_1 = require("../../middlewares/Auth");
const user_constants_1 = require("../user/user.constants");
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(booking_validation_1.bookingValidations.bookingValidationSchema), booking_controller_1.bookingController.createRental);
router.get('/', booking_controller_1.bookingController.getAllRentals);
router.put('/:id/return', (0, validateRequest_1.default)(booking_validation_1.bookingValidations.updateBookingValidationSchema), (0, Auth_1.Auth)(user_constants_1.userRole.admin), booking_controller_1.bookingController.returnBike);
exports.rentalRoutes = router;
