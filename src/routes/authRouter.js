// src/routes/auth.js

import { Router } from 'express'
import { AuthController } from '../controllers/AuthController.js'
import { requireAuth } from '../middleware/requireAuth.js'

export function authRouter(prisma) {
  const router = Router()
  const auth = new AuthController(prisma)

  router.post('/register', (req, res) => auth.register(req, res))
  router.post('/login', (req, res) => auth.login(req, res))
  router.get('/me', requireAuth, (req, res) => auth.me(req, res))

  return router
}