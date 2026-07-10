import { Router } from 'express'
import { HomeController } from '../controllers/HomeController'

export const homeRouter = Router()

const controller = new HomeController()

//GET
homeRouter.get('/', (req, res, next) => controller.index(res))