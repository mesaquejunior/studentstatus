import { Router } from 'express'
import StudentController from './controllers/StudentController'
import cors from 'cors'

const whitelist = ['10.80.82.47']
const corsOptions = {
  origin: function (origin: string, callback: (err: Error | null, allow?: boolean) => void) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }  
}

const routes = Router()

routes.get('/student', StudentController.show, cors())
routes.get('/students', StudentController.index, cors(corsOptions))
routes.post('/students', StudentController.store, cors(corsOptions))

export default routes