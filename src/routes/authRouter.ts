import { Router } from 'express'
import { AuthController } from '../controllers/AuthController.js'
//import { requireAuth } from '../middleware/requireAuth.js'
import { prisma } from '../lib/prisma'

export const authRouter = Router()

const controller = new AuthController(prisma)

// POST
authRouter.post('/register', (req, res) => controller.register(req, res))
authRouter.post('/login', (req, res) => controller.login(req, res))

// GET
//authRouter.get('/me', requireAuth, (req, res, next) => controller.me(req, res, next))