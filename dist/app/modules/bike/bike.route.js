"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = require("express");
const bike_controller_1 = require("./bike.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bike_validations_1 = require("./bike.validations");
const Auth_1 = require("../../middlewares/Auth");
const user_constants_1 = require("../user/user.constants");
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(bike_validations_1.bikeValidations.bikeValidationSchema), (0, Auth_1.Auth)(user_constants_1.userRole.admin), bike_controller_1.bikeController.createBike);
router.get('/', bike_controller_1.bikeController.getAllBike);
router.put('/:id', (0, validateRequest_1.default)(bike_validations_1.bikeValidations.updateBikeValidationSchema), (0, Auth_1.Auth)(user_constants_1.userRole.admin), bike_controller_1.bikeController.updateBike);
router.delete('/:id', (0, Auth_1.Auth)(user_constants_1.userRole.admin), bike_controller_1.bikeController.deleteBike);
exports.bikeRoutes = router;
