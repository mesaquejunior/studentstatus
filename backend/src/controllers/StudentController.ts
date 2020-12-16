import { Request, Response } from 'express'
import Student from '../schemas/Student'

class StudentController {
  
  public async index (req: Request, res: Response): Promise<Response> {
    const students = await Student.find()
    return res.json(students)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const fullra = req.query['fullra'] as string
    const student = await Student.findOne( { fullRa: fullra } )
    return res.json(student)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    
    const data = await Student.create(req.body)
    const { classId, fullName, raNumber, raDigit, ufRa, fullRa, bornDate, finalStatus, enrollDestination } = data
    const student = {
      classId,
      fullName,
      raNumber,
      raDigit,
      ufRa,
      fullRa,
      bornDate,
      finalStatus,
      enrollDestination
    }

    return res.json(student)
  }

}

export default new StudentController()