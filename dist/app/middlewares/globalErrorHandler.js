"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const config_1 = __importDefault(require("../config"));
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
// added void and error request handler as app.use() was not recognizing this function as error request handler.
const globalErrorHandler = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something went wrong';
    let errorSource = [
        {
            path: '',
            message: 'Something went wrong',
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSource = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'CastError') {
        const simplifiedError = (0, handleCastError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSource = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSource = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSource;
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        stack: config_1.default.node_env === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = globalErrorHandler;
