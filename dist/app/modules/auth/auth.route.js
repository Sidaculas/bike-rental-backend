"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("../user/user.validation");
// import { AuthValidation } from './auth.validation'
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
router.post('/signup', (0, validateRequest_1.default)(user_validation_1.userValidations.userValidationSchema), auth_controller_1.AuthController.register);
router.post('/login', 
// validateRequest(AuthValidation.loginValidationSchema),
auth_controller_1.AuthController.login);
exports.authRoutes = router;
