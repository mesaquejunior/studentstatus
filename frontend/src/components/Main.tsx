import React, { ChangeEvent, useCallback, useState} from 'react'
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
    setFullRaValue((event.target.value).toLocaleLowerCase())
  }, [])

  const handleClearStudent = (): void => {

  }

  return(
    <>
      <main className="box">
      <div className="container">
        <form className="formSearch">
          <div>
            <label htmlFor="fullra">DIGITE O RA + DÍGITO + SP</label>
            <input id="fullra" name="idfullra" type="text" className="inputForm" onChange = { handleInputChange } />
            
            <button className="formButton" type="submit" onClick={ handleSearchStudent }>PESQUISAR
            <i className="material-icons">search</i>
            </button>
            <span> </span>
            <button className="formButton" type="submit" onClick={ handleClearStudent }>LIMPAR
            <i className="material-icons">clear</i>
            </button>
          </div>
        </form>

          {student !== null  && student !== undefined ?
            <table className="studentData">
              <tbody>
                <tr>
                    <th>NOME DO ALUNO</th>
                </tr>
                <tr>
                    <td>{student?.fullName}</td>
                </tr>
                <tr>
                    <th>TURMA</th>
                </tr>
                <tr>
                    <td>{student?.classId}</td>
                </tr>
                <tr>
                    <th>RA</th>
                </tr>
                <tr>
                   <td>{student?.raNumber}</td>
                </tr>
                <tr>
                    <th>DÍGITO</th>
                </tr>
                <tr>
                    <td>{student?.raDigit}</td>
                </tr>
                <tr>
                    <th>UF RA</th>
                </tr>
                <tr>
                    <td>{student?.ufRa}</td>
                </tr>
                <tr>
                    <th>DATA DE NASCIMENTO</th>
                </tr>
                <tr>
                    <td>{student?.bornDate}</td>
                </tr>
                <tr>
                    <th>SITUAÇÃO</th>
                </tr>
                <tr>
                    <td>{student?.finalStatus}</td>
                </tr>
                {student?.enrollDestination !== "" ?
                <tr>
                    <th>ESCOLA DESTINO</th>
                </tr>
                : <tr></tr>}
                {student?.enrollDestination !== "" ?
                <tr>
                    <td>{student?.enrollDestination}</td>
                </tr>
                : <tr></tr>}

              </tbody>
            </table>
          : student !== undefined ? <div className="warning"><i className="material-icons">warning</i><span>RA INEXISTENTE!</span></div> : undefined}
        </div>
      </main>
      <div className="space"></div>
    </>
  )
}

export default Main;