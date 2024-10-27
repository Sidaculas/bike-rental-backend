import { Router } from 'express'

const router = Router()

router.get('/me')
router.put('/me')

export const userRoutes = router
