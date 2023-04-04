// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Await, Link, useNavigate, useParams } from "react-router-dom";

// export default function Edituser() {

//     let navigate = useNavigate()
//     const [developer, setDeveloper] = useState([]);
//     const [inputname, setInputname] = useState([]);
//     const[id,setId] = useState([0]);
//     const [inputRole, setInputRole] = useState([]);
//     const [bool, setBool] = useState(false)

//     const cid = useParams()
   
//     const [candidate, setCandidate] = useState({
//         cid:"",
//         name: "",
//         did: 0,
//         role: ""
//     })

//     const { name, did, role } = candidate;

//     const OnInputChange = (e) => {

//         setCandidate({ ...candidate, [e.target.name]: e.target.value });
//         if (e.target.name === "name") {
//             setInputname(e.target.value)
//         }
//         else {
//             setInputRole(e.target.value)
//         }
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         setCandidate(prev => cand)
//         await axios.put(`http://localhost:8089/Candidate`, candidate);
//         console.log(candidate);
//         navigate("/");
//     };
   
//     useEffect(() => {
//         loaddeveloper();
//     }, []);
    
//     const loaddeveloper = async () => {
//         const Developer = await axios.get(`http://localhost:8089/Developer`);
//         console.log(Developer.data);
//         setDeveloper(Developer.data);
//     };

//     let cand = {
//         cid: " ",
//         name: inputname,
//         did: id         ,
//         role: inputRole
//     }

//     useEffect(() => {
//         loadcandidate();
//     }, []);

//     const handleDeveloperChange = async (e) => {
//         developer.map((Developer) => {
//             if (Developer.name === e.target.value) {
//                 setId(id => (Developer.did))
//             }
//         })
//          console.log(id);
//         cand = {
//             cid: "",
//             name: inputname,
//             did: id,
//             role: inputRole
//         }
//         setBool(!bool)

//     }
//     useEffect(() => {
//         console.log(cand);
//         setCandidate(cand)

//     }, [bool])

//     const loadcandidate = async () => {
//         console.log(cid);
//         const candidate = await axios.get(`http://localhost:8089/Candidate/${cid.cid}`);
//         setCandidate(candidate.data)
//     }

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
//                     <center><h3>Edit Candidate</h3></center>

//                     <form onSubmit={(e) => onSubmit(e)}>
//                         <div className='mb-3'>
//                              {/* <label htmlFor='Cid' className='form-lable'>
//                                 cid
//                             </label>
//                             <input
//                                 type={"text"}
//                                 className="form-control"
//                                 placeholder='Enter your cid'
//                                 name="cid"
//                                 value={cid.cid}
//                                 onChange={(e) => OnInputChange(e)}
//                                 required
//                             />  */}
//                             <label htmlFor='name' className='form-lable'>
//                                 name
//                             </label>
//                             <input
//                                 type={"text"}
//                                 className="form-control"
//                                 placeholder='Enter your name'
//                                 name="name"
//                                 value={name}
//                                 onChange={(e) => OnInputChange(e)}
//                                 required
//                             />
                        
//                              <label htmlFor=' Developer' className='form-lable' defaultValue="Select Your Developer">
//                                 Developers
//                             </label>
//                             <select className="form-control" onChange={(e) => handleDeveloperChange(e)} >
//                                   {
//                                     developer.map((Developer) => (
//                                         <option value={Developer.name}>{Developer.name}</option>
                                        
//                                     ))
//                                 }  
//                                  <td>
//                                         {
//                                             developer.map((dev)=> {
//                                                 if(candidate.did === dev.did){
//                                                     return(dev.name)
//                                                 }
//                                             })
//                                         }
//                                     </td>
//                             </select> 
//                             <label htmlFor=' role' className='form-lable'>
//                                 role
//                             </label>
//                             <input
//                                 type={"text"}
//                                 className="form-control"
//                                 placeholder='Enter your role'
//                                 name="role"
//                                 value={role}
//                                 onChange={(e) => OnInputChange(e)}
//                                 required
//                             />
//                         </div>
//                         <center> <button type="submit" className='btn btn-outline-primary' to={"/"}>Update</button>
//                             <Link className="btn btn-outline-danger mx-2" to={"/"} >cancel
//                             </Link></center>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }







