import { Router } from 'express'
import StudentController from './controllers/StudentController'
import Student from './schemas/Student'

const routes = Router()

routes.get('/students', StudentController.index)
routes.post('/students', StudentController.store)
// routes.get('/students2', StudentController.show)

export default routes