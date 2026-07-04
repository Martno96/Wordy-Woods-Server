import { format } from 'date-fns'

export class UserController {
  index (req, res, next) {
    res.json('user/index')
  }

  show (req, res, next) {
    const { id } = req.params
    res.json('user/show', { id })
  }
}
