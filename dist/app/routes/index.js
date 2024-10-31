"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bike_route_1 = require("../modules/bike/bike.route");
const booking_route_1 = require("../modules/booking/booking.route");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/bikes',
        route: bike_route_1.bikeRoutes,
    },
    {
        path: '/rentals',
        route: booking_route_1.rentalRoutes,
    },
    {
        path: '/users',
        route: user_route_1.userRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.authRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
