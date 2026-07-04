import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class AuthController {
  constructor(prisma) {
    this.prisma = prisma
  }

  async register(req, res) {
    const { username, display_name, email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' })
    }

    const email_existing = await this.prisma.user.findUnique({ where: { email } })
    if (email_existing) {
      return res.status(409).json({ error: 'Email already in use' })
    }

    const username_existing = await this.prisma.user.findUnique({ where: { email } })
    if (username_existing) {
      return res.status(409).json({ error: 'Username already in use' })
    }

    const password_hash = await bcrypt.hash(password, 12)
    const user = await this.prisma.user.create({ data: { email, password_hash, display_name, username } })

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return res.status(201).json({ token })
  }

  async login(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' })
    }

    const user = await this.prisma.user.findUnique({ where: { email } })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const valid = await bcrypt.compare(password, user.password_hash)
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return res.status(200).json({ token })
  }

  me(req, res) {
    return res.status(200).json({ user: req.user })
  }
}