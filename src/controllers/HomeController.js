import { format } from 'date-fns'

export class HomeController {
  index (req, res, next) {
    res.json('home/index')
  }
}
