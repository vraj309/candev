import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Paginator } from 'primereact/paginator';
import { Link, useNavigate, useParams } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';

export default function Adddev() {

  const [developer, setDeveloper] = useState({
    did: 0,
    name: "",
    role: 0
  })

  const [deve, setDeve] = useState([]);
  let navigate = useNavigate()
  const [bool, setBool] = useState(false)
  const [editDataFor, setEditDataFor] = useState([]);
  const [devloperID, setDevloperID] = useState(0);
  const [devloperName, setDevloperName] = useState();
  const [developerRole, setDeveloperRole] = useState();
  const [alldeveloper, setAllDeveloper] = useState([]);
  const[totalDeveloper, setTotalDeveloper] = useState([]);
  const [lengthdev, setLengthdev] = useState(1);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const[page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  

//Filter
  const [dropdowndeveloperrole,setDropdownDeveloperRole] = useState([]);
  const [selectedrole, setSelectedRole] = useState();


      let dev = {
        did: devloperID,
        name: devloperName,
        role: developerRole,
      }
      
      const [name, setName] = useState()
      const { id } = useParams()

          //pagination
          const onPageChange = (event) => {
            setFirst(P => event.first);
            setRows(P => event.rows);
            setPage(p => event.page)
            loaddeveloper()
          };

          const OnInputChange = (e) => {
            if (e.target.name === "devloperName") {
              setDevloperName(prev => e.target.value)
            }

            if (e.target.name === "developerRole") {
              setDeveloperRole(prev => e.target.value)
            }
          };

        useEffect(() => {
          loaddeveloper();
            axios.get("http://localhost:8089/Developer")
            .then((response) => setTotalDeveloper(P => response.data))
            console.log("total",totalDeveloper.length); 

              axios.get("http://localhost:8089/Developer")
          .then((response) =>setDropdownDeveloperRole(response.data))
          console.log(selectedrole);
          }, [])
 
       //pagination Api
      const loaddeveloper = async () => {
        const result = await axios.get(`http://localhost:8089/Developer/${page}/${rows}`);
        setAllDeveloper(prev => result.data)
        console.log(alldeveloper);
      }


      const onSubmit = async (e) => {
        e.preventDefault();
        let update = {
          did: devloperID,
          name: devloperName,
          role: developerRole
        }
            
        setDeveloper(prev => update)
        await axios.put("http://localhost:8089/Developer", update);
        console.log(update);
        loaddeveloper();
    // navigate("/Devloper");
  }
           //Edit Api 
          const Editdeveloper = async (did) => {
            const result = await axios.get(`http://localhost:8089/Developer/${did}`)
            setDevloperID(result.data.did)
            setDevloperName(result.data.name)
            setDeveloperRole(result.data.role)
          }

      const deletedevloper = async (id) => {
        await axios.delete(`http://localhost:8089/Developer/${id}`);
        loaddeveloper()
      };
          
      //search
      const searchRecords = () =>{
        axios.get(`http://localhost:8089/getAllDeveloper/${search}`)
        .then((response)  => setAllDeveloper(P => response.data))
      }

       //Filter button
       const onFilterChange = () => {
        axios.get(`http://localhost:8089/getDeveloper/${selectedrole.role}`)
        .then((response) => setAllDeveloper(response.data))
}

  return (
    <div className='container my-4 '>
      <div className='row my-3'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <center><i><h3>Developer Form</h3></i></center>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>

              <label htmlFor='name' className='form-lable'>
                name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter your Full-name Hear'
                name="devloperName"
                value={devloperName}
                onChange={(e) => OnInputChange(e)}
              />

              <label htmlFor=' role' className='form-lable'>
                role
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter your Role Here'
                name="developerRole"
                value={developerRole}
                onChange={(e) => OnInputChange(e)}

              />
            </div>
            <center>
              <button type="submit" className='btn btn-outline-primary' to={"/Devloper"}>submit</button>

              <Link type='Button' className="btn btn-outline-danger mx-2" to={"/Devloper"} >cancel
              </Link></center>
          </form>
        </div>
      </div>
      <div className='container my-4'>
        <center><i><h3>Developer Data</h3></i></center>
         <InputText type="text" className="p-inputtext" onChange={(e) => setSearch(e.target.value)} placeholder="Search Name" />

        <button type="button" class="btn btn-outline-dark mx-2" onClick={searchRecords}>Search</button>

        <Dropdown value={selectedrole}className="w-full md:w-14rem" optionLabel="role" onChange={(e) => setSelectedRole(e.value)} options= {dropdowndeveloperrole}  placeholder="Select a Role" />
                    
        <button type="button" class="btn btn-outline-dark mx-2" onClick={onFilterChange}> Filter </button>


        <div className='py-4'>
          <table className='table border shadow'>
            <thead>
              <tr>
                <th scope="col" className='p-4'> No </th>
                {/* <th scope="col" className='p-4'> did </th>  */}
                <th scope="col" className='p-4'> Name </th>
                <th scope="col" className='p-4'> Role </th>
                <th scope="col" className='p-4'> Action </th>
              </tr>
            </thead>

            <tbody>
              {/* {console.log(developer)} */}
                      {

                        alldeveloper.map((deve, index) => (
                          <tr>
                            <th scope="row" key={index}>
                              {index + 1}
                            </th>
                            <td>{deve.name}</td>
                            <td>{deve.role}</td>
                            <td>

                              <button className='btn btn-outline-primary mx-2'
                                onClick={() => Editdeveloper(deve.did)}>Edit</button>

                              <button className='btn btn-danger mx-2'
                                onClick={() => deletedevloper(deve.did)}>Delete..</button>
                            </td>
                          </tr>
                        ))
                      }

            </tbody>
          </table>
        </div>
        <div className="card">
          <Paginator first={first} rows={rows} page={page} totalRecords={totalDeveloper.length} rowsPerPageOptions={[5, 10, 20]} onPageChange={onPageChange} />
          {console.log('Length',alldeveloper.length)}
        </div>
      </div>
    </div>
  );
}

