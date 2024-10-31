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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeServices = void 0;
const bike_model_1 = require("./bike.model");
// import AppError from '../../errors/AppError'
const createBikeIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.create(payload);
    return result;
});
const getAllBikeFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.find();
    return result;
});
const updateBikeFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // temp validation
    // if (!Types.ObjectId.isValid(id)) {
    //   throw new AppError(404, 'Invalid ID format')
    // }
    const result = yield bike_model_1.Bike.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBikeFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield bike_model_1.Bike.findByIdAndDelete(id);
    return bike;
});
exports.bikeServices = {
    createBikeIntoDb,
    getAllBikeFromDb,
    updateBikeFromDb,
    deleteBikeFromDb,
};
