import { Router } from 'express'
import { homeRouter } from './homeRouter.js'
import { userRouter } from './userRouter.js'

export const router = Router()

router.use('/', homeRouter)
router.use('/users', userRouter)
