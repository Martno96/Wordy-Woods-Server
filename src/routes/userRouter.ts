import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'
import { prisma } from '../lib/prisma.js'

export const userRouter = Router()

const controller = new UserController(prisma)

// GET
userRouter.get('/', (req, res, next) => controller.index(req, res))
userRouter.get('/:id', (req, res, next) => controller.show(req, res))