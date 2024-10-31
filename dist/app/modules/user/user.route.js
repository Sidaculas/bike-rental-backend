"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const Auth_1 = require("../../middlewares/Auth");
const user_constants_1 = require("./user.constants");
// import { userController } from './user.controller'
const router = (0, express_1.Router)();
router.post('/create-admin', (0, validateRequest_1.default)(user_validation_1.userValidations.userValidationSchema), (0, Auth_1.Auth)(user_constants_1.userRole.admin), user_controller_1.userController.createAdmin);
router.get('/me', user_controller_1.userController.getUser);
// router.get('/', userController.findUser)
router.put('/me', (0, validateRequest_1.default)(user_validation_1.userValidations.updateUserValidationSchema), user_controller_1.userController.updateUser);
exports.userRoutes = router;
