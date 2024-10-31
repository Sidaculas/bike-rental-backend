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
exports.bookingServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const bike_model_1 = require("../bike/bike.model");
const booking_model_1 = require("./booking.model");
const createRentalIntoDb = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // checking if the bike is available
    const { bikeId } = payload;
    const bike = yield bike_model_1.Bike.findById(bikeId);
    if (!bike || !(bike === null || bike === void 0 ? void 0 : bike.isAvailable)) {
        throw new AppError_1.default(400, 'This bike is not available');
    }
    const cPayload = Object.assign(Object.assign({}, payload), { userId });
    const result = yield booking_model_1.Booking.create(cPayload);
    // setting bike available status to false
    bike.isAvailable = false;
    yield bike.save();
    return result;
});
const getAllRentalFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.find();
    return result;
});
const returnBikeFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //checking if the rent is valid and exists in database
    const rent = yield booking_model_1.Booking.findById(id);
    if (!rent) {
        throw new AppError_1.default(404, 'Rental Not Found');
    }
    // checking if the bike is already returned
    if (rent.isReturned) {
        throw new AppError_1.default(404, 'Bike already returned');
    }
    // fetching bike details
    const bike = yield bike_model_1.Bike.findById(rent.bikeId);
    if (!bike) {
        throw new AppError_1.default(404, 'Bike not found');
    }
    // calculating cost
    const currentTime = new Date();
    const rentTime = Math.ceil(currentTime.getTime() - rent.startTime.getTime()) /
        (1000 * 60 * 60);
    //   console.log(currentTime.getTime(), rentTime)
    const totalCost = rentTime * bike.pricePerHour;
    // updating isAvailable
    bike.isAvailable = true;
    yield bike.save();
    // updating rent
    rent.returnTime = currentTime;
    rent.totalCost = totalCost;
    rent.isReturned = true;
    yield rent.save();
    return rent;
});
exports.bookingServices = {
    createRentalIntoDb,
    getAllRentalFromDb,
    returnBikeFromDb,
};
