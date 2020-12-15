import { Schema, model, Model, Document } from 'mongoose'

interface StudentInterface extends Document {
  classId?: string
  fullName?: string
  raNumber?: string
  raDigit?: string
  ufRa?: string
  fullRa?: string
  bornDate?: string
  finalStatus?: string
  enrollDestination?: string
}

const StudentSchema = new Schema({
    classId: String,
    fullName: String,
    raNumber: String,
    raDigit: String,
    ufRa: String,
    fullRa: String,
    bornDate: String,
    finalStatus: String,
    enrollDestination: String
  },
  {
    timestamps: true
})

const Student: Model<StudentInterface> = model('Student', StudentSchema)

export default Student

