import React, { ChangeEvent, useCallback, useState } from 'react'
import api from '../services/api'

interface StudentInterface{
  id: string,
  bornDate: string,
  classId: string,
  enrollDestination?: string,
  finalStatus: string,
  fullName: string,
  fullRa: string,
  raDigit: string,
  raNumber: string,
  ufRa: string
}

const Main: React.FC  = () => {

  const [student, setStudent] = useState<StudentInterface>()
  const [fullravalue, setFullRaValue] = useState('')

  const handleSearchStudent = useCallback((event: any): void => {
    event.preventDefault()

    api.get(`student?fullra=${fullravalue}`).then(response => {
      setStudent(response.data)
    })
  }, [fullravalue])

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {

    setFullRaValue(event.target.value)
  }, [])

  const handleClearStudent = (): void => {

  }

  return(
    <>
      <main className="box">
      <div className="container">
        <form className="formSearch">
          <div>
            <label htmlFor="fullra">DIGITE O RA + DÍGITO + UF</label>
            <input id="fullra" name="idfullra" type="text" className="inputForm" onChange = { handleInputChange } />
            
            <button className="formButton" type="submit" onClick={ handleSearchStudent }>Pesquisar
            </button>
            <span> </span>
            <button className="formButton" type="submit" onClick={ handleClearStudent }>Limpar
            </button>
          </div>
        </form>

          {student &&
            <table>
              <tbody>
                <tr>
                    <th>NOME DO ALUNO =</th><td>{student?.fullName}</td>
                </tr>
                <tr>
                    <th>TURMA =</th><td>{student?.classId}</td>
                </tr>
                <tr>
                    <th>RA =</th><td>{student?.raNumber}</td>
                </tr>
                <tr>
                    <th>DÍGITO =</th><td>{student?.raDigit}</td>
                </tr>
                <tr>
                    <th>UF RA =</th><td>{student?.ufRa}</td>
                </tr>
                <tr>
                    <th>DATA DE NASCIMENTO =</th><td>{student?.bornDate}</td>
                </tr>
                <tr>
                    <th>SITUAÇÃO =</th><td>{student?.finalStatus}</td>
                </tr>
                {student.enrollDestination !== "" ?
                <tr>
                    <th>ESCOLA DESTINO =</th><td>{student?.enrollDestination}</td>
                </tr> : <tr></tr>}
              </tbody>
            </table>
          }
        </div>
      </main>
    </>
  )
}

export default Main;