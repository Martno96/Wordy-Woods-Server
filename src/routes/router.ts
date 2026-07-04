import { Router } from 'express'
import { homeRouter } from './homeRouter'
import { userRouter } from './userRouter'
import { authRouter } from './authRouter'

export const router = Router()

router.use('/', homeRouter)
router.use('/users', userRouter)
router.use('/auth', authRouter)