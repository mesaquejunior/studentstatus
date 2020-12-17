import React, { useState } from 'react'
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

  const handleSearchStudent = (event: any) => {
    event.preventDefault()

    api.get(`student?fullra=${fullravalue}`).then(response => {
      setStudent(response.data)
    })
  }

  return(
    <>
    <main className="center">
    <div className="row">
      <form className="col s12">
        <div className="input-field col s12">
          <input value={fullravalue} id="fullra" type="text" className="validate" onChange = {(e: React.FormEvent<HTMLInputElement>) => setFullRaValue(e.currentTarget.value)} />
          <label className="active" htmlFor="fullra">Digite o RA com Dígito e UF</label>
          <button className="btn waves-effect waves-light" type="submit" onClick={handleSearchStudent}>Pesquisar
          <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
    {student && 
    <table className="striped">
        <tbody>
          <tr>
              <th>NOME DO ALUNO - </th><td>{student?.fullName}</td>
          </tr>
          <tr>
              <th>TURMA - </th><td>{student?.classId}</td>
          </tr>          
          <tr>
              <th>RA - </th><td>{student?.raNumber}</td>
          </tr>
          <tr>
              <th>DÍGITO - </th><td>{student?.raDigit}</td>
          </tr>
          <tr>
              <th>UF RA - </th><td>{student?.ufRa}</td>
          </tr>
          <tr>
              <th>DATA DE NASCIMENTO - </th><td>{student?.bornDate}</td>
          </tr>
          <tr>
              <th>SITUAÇÃO - </th><td>{student?.finalStatus}</td>
          </tr>
          <tr>    
              <th>ESCOLA DESTINO - </th><td>{student?.enrollDestination}</td> 
          </tr>
        </tbody>
      </table>
            }
      </main>
    </>
  )
}

export default Main;