import { Router } from 'express'
import { bikeRoutes } from '../modules/bike/bike.route'
import { rentalRoutes } from '../modules/booking/booking.route'
import { userRoutes } from '../modules/user/user.route'
import { authRoutes } from '../modules/auth/auth.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/bikes',
    route: bikeRoutes,
  },
  {
    path: '/rentals',
    route: rentalRoutes,
  },

  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
