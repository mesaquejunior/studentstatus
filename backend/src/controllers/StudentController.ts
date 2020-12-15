import { Request, Response } from 'express'
import Student from '../schemas/Student'

class StudentController {
  
  public async index (req: Request, res: Response): Promise<Response> {
    const students = await Student.find()
    return res.json(students)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const data = await Student.create(req.body)
    const { classId, fullName, raNumber, raDigit, ufRa, bornDate, finalStatus, enrollDestination } = data
    const student = {
      classId,
      fullName,
      raNumber,
      raDigit,
      ufRa,
      fullRa: fullRa(raNumber, raDigit, ufRa),
      bornDate,
      finalStatus,
      enrollDestination
    }

    return res.json(student)
  }

}

function fullRa(raNumber:string,raDigit:string,ufRa:string): String {
  return `${raNumber}${raDigit}${ufRa}`.toLowerCase()
}


export default new StudentController()