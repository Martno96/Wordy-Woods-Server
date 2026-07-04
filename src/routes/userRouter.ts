import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'

export const userRouter = Router()

const controller = new UserController()

//GET
userRouter.get('/', (req, res, next) => controller.index(req, res, next))
userRouter.get('/:id', (req, res, next) =>
  controller.show(req, res, next)
)

//POST
userRouter.post('/', (req, res, next) => controller.indexPost(req, res, next))
