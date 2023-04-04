import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function ClassHome() {

  const [classes, setClasses] = useState([])
  let navigate = useNavigate()
  const [editDataFor, setEditDataFor] = useState()
  const [classesForName, setClassesForName] = useState({
    cName: "",
  })
  const { cName } = classesForName
  const { id } = useParams()

  const onInputChange = (e) => {
    setClassesForName({ ...classesForName, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/classes", classesForName)
    console.log("err");
    loadClasses();
  }

  useEffect(() => {
    loadClasses();
  }, [])

  const editData = async (id) => {
    console.log("Hello");
    const result = await axios.get(`http://localhost:8081/classes/${id}`)
    setClassesForName(result.data)
    console.log(editDataFor);
  }

  const loadClasses = async () => {
    const result = await axios.get('http://localhost:8081/classes')
    setClasses(result.data);
  }

  const deleteClasses = async (cID) => {
    await axios.delete(`http://localhost:8081/classes/${cID}`)
    loadClasses()
  }



  return (

    <div className='container my-4'>
      <div className='container my-3'>
        <h5 className='text-center'>Add Class</h5>
        <div className='row my-3'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                  Name
                </label>
                <input type='text' className='form-control mb-4' name='cName' value={cName} onChange={(e) => onInputChange(e)} required />
              </div>

              <center>
                <button type="submit" className='btn btn-outline-dark'>Submit</button>
              </center>
            </form>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <h5 className='text-center'>Class Data</h5>
        <div className='py-4'>


          <table className="table border shadow">
            <thead>
              <tr align='center'>
                <th scope="col" className='p-4'>Class ID</th>
                <th scope="col" className='p-4'>Class Name</th>
                <th scope="col" className='p-4'>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                classes.map((classes, index) => (
                  <tr className='p-4' align='center'>
                    <td align='center'>{classes.cID}</td>
                    <td align='center'>{classes.cName}</td>
                    <td align='center'>
                      <button className='btn btn-outline-primary mx-2'
                        onClick={() => { editData(classes.cID) }}>
                        Edit</button>
                      <Link className='btn btn-outline-danger mx-2'
                        onClick={() => deleteClasses(classes.cID)}
                      >Delete</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
