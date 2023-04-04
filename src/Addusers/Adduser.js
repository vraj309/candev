import axios, { Axios } from 'axios';
import React, { useState, useEffect, useImperativeHandle } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { Paginator } from 'primereact/paginator';
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';

export default function Adduser() {

    let navigate = useNavigate()

    const [developer, setDeveloper] = useState([])
    const [id, setId] = useState(0)
    const [inputname, setInputname] = useState("")
    const [inputrole, setInputrole] = useState("")
    const [bool, setBool] = useState(false);
    const [cid, setCid] = useState(0)
    const [cand, setCand] = useState([]);
    const [candi, setCandi] = useState([]);
    const [deve, setDeve] = useState([]);
    const [devid, setDevid] = useState(0);
    const [dbool, setDbool] = useState(false);
    const [allCandidate, setAllCandidate] = useState([])
    const [lengthcand, setLengthcand] = useState(1)
    const [first, setFirst] = useState(0)
    const [rows, setRows] = useState(5)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("");

   //Filter
    const [dropdowndeveloper,setDropdownDeveloper] = useState([]);
    const [selecteddveloper, setSelectedDeveloper] = useState();

    const [fbool, setFbool] = useState(false);
    const [candidate, setCandidate] = useState({
        cid: 0,
        name: inputname,
        role: inputrole,
        did: id
    })

    let can = {
        cid: cid,
        did: id,
        name: inputname,
        role: inputrole
    }

     //pagination
    const onPageChange = (event) => {
        setFirst(p => event.first);
        setRows(p => event.rows);
        setPage(p => (event.page))
        loadCandidate()
        // console.log("rows", rows);
    };

    const OnInputChange = (e) => {
        if (e.target.name === "name") {
            setInputname(prev => e.target.value)
            // console.log(candidate);
        }
        if (e.target.name === "role") {
            setInputrole(prev => e.target.value)
        }
    }

    useEffect(() => {
        loadDeveloper();
        loadCandidate();
        axios.get("http://localhost:8089/Candidate")
            .then((response) => setAllCandidate(response.data))
        setLengthcand(allCandidate.length);
        console.log('length', lengthcand);

        axios.get("http://localhost:8089/Developer")
        .then((response) =>setDropdownDeveloper(response.data))
         console.log(selecteddveloper);
        }, [])


        const loadDeveloper = async () => {
            const result = await axios.get(`http://localhost:8089/Developer`);
            // console.log(result.data);
            setDeveloper(result.data);
            setDeve(result.data);
        }
        useEffect(() => {
            loadCandidate();
        }, []);

            //pagination Api
            const loadCandidate = async () => {
                const result = await axios.get(`http://localhost:8089/Candidate/${page}/${rows}`);
                setCand(prev => result.data);
            }

                const onSubmit = async (e) => {
                    e.preventDefault();
                    let update = {
                        cid: cid,
                        name: inputname,
                        did: id,
                        role: inputrole
                    }
                    setCandidate(prev => update)
            // console.log(candidate);

                    if (dbool === true) {
                        await axios.put("http://localhost:8089/Candidate", update)
                        // console.log(candidate)
                    } else {
                        await axios.post("http://localhost:8089/Candidate", candidate)
                        //   console.log(candidate)
                    }
                    loadCandidate();
                }



            //Edit Api 
            const editData = async (did) => {
                const result = await axios.get(`http://localhost:8089/Candidate/${did}`);
                setDbool(prev => true);
                setInputname(result.data.name);
                setInputrole(result.data.role)
                setCid(result.data.cid)
                setDevid(prev => result.data.did);
            }

            useEffect(() => {
                setCandidate(prev => can)
                // console.log(student);
            }, [bool])

            const loadcandidate = async () => {
                const result = await axios.get(`http://localhost:8089/Candidate`);
                setCandidate(result.data)
                setCand(result.data);
             }

            // Delete Candidate
            const deleteCandidate = async (cid) => {
                await axios.delete(`http://localhost:8089/Candidate/${cid}`)
                loadcandidate()
            };

            //Search
            const searchRecords = () => {
                axios.get(`http://localhost:8089/getAllCandidate/${search}`)
                    //  setDevid(prev => result.data.did);
                    .then((response) => setCand(p => response.data))

            };

            //DropdownList Button
            const handleDeveloperChange = (e) => {
                developer.map((developer) => {
                    if (developer.name === e.target.value) {
                        setId(ID => developer.did)
                        // console.log(classes);
                    }
                })
                can = {
                    cid: 0,
                    name: inputname,
                    did: id,
                    role: inputrole,
                }
                setBool(!bool)
            }

            useEffect((e)=> {
                developer.map((developer) => {
                    if (developer.name === e.target.value) {
                        setId(ID => developer.did)
                        console.log(id);
                    }
                })
            },[fbool])

                //Filter button
                const onFilterChange = () => {
                        axios.get(`http://localhost:8089/Candidatebydid/${selecteddveloper.did}`)
                        .then((response) => setCand(response.data))
                }
            


        return (
            <div className='container my-3'>
                <div className='row my-3'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <center><i><h3>Candidate Form</h3></i></center>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-lable'>
                                    name
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder='Enter your Full name Here'
                                    name="name"
                                    value={inputname}
                                    onChange={(e) => OnInputChange(e)}
                                    required
                                />

                                <label htmlFor=' role' className='form-lable'>
                                    role
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder='Enter your Role'
                                    name="role"
                                    value={inputrole}
                                    onChange={(e) => OnInputChange(e)}
                                    required
                                />
                                <label htmlFor=' Developer' className='form-lable' defaultValue="Select Your Developer">
                                    Developers
                                </label>
                                <select className='form-control' onChange={(e) => handleDeveloperChange(e)}>
                                    {
                                        developer.map((dev) => {
                                            if (devid === dev.did) {
                                                return (
                                                    <option value={dev.name} selected>{dev.name}</option>
                                                )
                                            }
                                            else {
                                                return (
                                                    <option value={dev.name}>{dev.name}</option>
                                                )
                                            }

                                        })
                                    }
                                </select>

                            </div>

                            <center>
                                <button type="button" className='btn btn-outline-primary' onClick={(e) => onSubmit(e)}>submit</button>

                                <button type="button" className='btn btn-outline-danger'>
                                    cancel</button>

                            </center>
                        </form>
                    </div>
                </div>


                <div className='container my-4'>

                    <center><i><h3>Candidate Data</h3></i></center>

                    <InputText type="text" className="p-inputtext" onChange={(e) => setSearch(e.target.value)} placeholder="Search Name" />

                    <button type="button" class="btn btn-outline-dark mx-2" onClick={searchRecords}>Search</button>

                    <Dropdown value={selecteddveloper} optionLabel="name" onChange={(e) => setSelectedDeveloper(e.value)} options= {dropdowndeveloper} className="w-full md:w-14rem" placeholder="Select a Developer" />
                    
                        <button type="button" class="btn btn-outline-dark mx-2" onClick={onFilterChange}> Filter </button>
                
                    <table className="table border shadow">
                        <thead>
                            <tr className='bg-light'>
                                <th scope="col">#</th>
                                <th scope="col" className='P-4'>Name</th>
                                <th scope="col" className='P-4'>Devloper</th>
                                <th scope="col" className='P-4'>Role</th>
                                <th scope="col" className='P-4'>Action</th>
                            </tr>
                        </thead>
                            <tbody>
                                {
                                cand.map((cand, index) => (
                                    <tr>
                                        <th scope="row" key={index}>
                                            {index + 1}
                                        </th>
                                        <td>{cand.name}</td>
                                        <td>
                                            {
                                                developer.map((devd) => {
                                                    if (cand.did === devd.did) {
                                                        return (devd.name)
                                                    }
                                                        })
                                            }
                                        </td>
                                        <td>{cand.role}</td>

                                        <td>
                                            <button className='btn btn-outline-primary mx-1'
                                                onClick={() => {editData(cand.cid) }}
                                            >Edit</button>

                                            <Link className='btn btn-outline-danger mx-1'
                                                onClick={() => deleteCandidate(cand.cid)}
                                            >Delete</Link>
                                        </td>
                                            </tr>
                                ))
                            }
                        </tbody>
                    </table>


                </div>

                        <div className="card">
                            <Paginator first={first} rows={rows} totalRecords={allCandidate.length} rowsPerPageOptions={[5, 10, 20]} onPageChange={onPageChange} />
                        </div>
                    </div>
)                
}

