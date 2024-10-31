"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const user_services_1 = require("./user.services");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const createAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield user_services_1.userServices.createAdminIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Admin created successfully',
        data: admin,
    });
}));
const getUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { refreshToken } = req.cookies;
    refreshToken = refreshToken.split(' ')[1];
    const verifiedToken = jsonwebtoken_1.default.verify(refreshToken, config_1.default.jwt_refresh_secret);
    const { email } = verifiedToken;
    const user = yield user_services_1.userServices.getUserFromDb(email);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'User profile retrieved successfully',
        data: user,
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { refreshToken } = req.cookies;
    refreshToken = refreshToken.split(' ')[1];
    const verifiedToken = jsonwebtoken_1.default.verify(refreshToken, config_1.default.jwt_refresh_secret);
    const { email } = verifiedToken;
    const user = yield user_services_1.userServices.updateUserFromDb(email, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Profile updated successfully',
        data: user,
    });
}));
exports.userController = {
    createAdmin,
    getUser,
    updateUser,
};
