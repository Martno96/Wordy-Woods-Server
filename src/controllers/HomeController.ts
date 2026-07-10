import { format } from 'date-fns'
import type { Response } from 'express'

export class HomeController {
  index (res: Response) {
    res.json('home/index')
  }
}
