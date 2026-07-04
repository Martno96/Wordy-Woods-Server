import { Router } from 'express'
import { HomeController } from '../controllers/HomeController.js'

export const homeRouter = Router()

const controller = new HomeController()

//GET
homeRouter.get('/', (req, res, next) => controller.index(req, res, next))

//POST
homeRouter.post('/', (req, res, next) => controller.indexPost(req, res, next))
