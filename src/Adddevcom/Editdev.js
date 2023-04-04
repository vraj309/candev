// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Await, Link, useNavigate, useParams } from "react-router-dom";

// export default function Editdev() {

//     let navigate = useNavigate()

//     const did = useParams()
//     const [inputname, setInputname] = useState();
//     const [inputRole, setInputRole] = useState();
//     const[id,setId] = useState([0]);
//     const [bool,setBool]= useState()

//     const [developer, setDeveloper] = useState({     
//          did: 0,
//         name: " ",
//         role: " "
//     })
    
//     const {name, role } = developer;

//     // setDeveloper({...developer,[e.target.name]: e.target.value });
//     const OnInputChange = (e) => {
//         if (e.target.name === "name") {
//             setInputname(e.target.value)
//         }
//         else if ((e.target.name === "role")) {
//             setInputRole(e.target.value)
//         }
//     };

//     const onSubmit = async (e) => {

//         e.preventDefault();
//         setDeveloper(prev => devl)

//         await axios.put(`http://localhost:8089/Developer`, developer);
//          console.log(developer);
//         navigate("/Devloper");
//     };

//     useEffect(() => {
//        loaddeveloper()
//     }, []);

//     const loaddeveloper = async () => {
//         // console.log(developer.data);
//         const developer = await axios.get(`http://localhost:8089/Developer/${did,did}`);
//         console.log(developer.data);
//         setDeveloper(developer.data);
//     };

//     let devl = {
//         name: inputname,
//         role: inputRole
//     }
//     useEffect(() => {
//         loaddeveloper()
//      }, []);
     
 

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
//                     <center><h3>Edit Developer</h3></center>

//                     <form onSubmit={(e) => onSubmit(e)}>
//                         <div className='mb-3'>
//                             <label htmlFor='name' className='form-lable'>
//                                 name
//                             </label>
//                             <input
//                                 type={"text"}
//                                 className="form-control"
//                                 placeholder='Enter your Full name Here'
//                                 name="name"
//                                 value={inputname}
//                                 onChange={(e) => OnInputChange(e)}
//                                 required
//                             />
                           
//                             <label htmlFor=' role' className='form-lable'>
//                                 role
//                             </label>
//                             <input
//                                 type={"text"}
//                                 className="form-control"
//                                 placeholder='Enter your role Here'
//                                 name="role"
//                                 value= {inputRole}
//                                 onChange={(e) => OnInputChange(e)}
//                                 required
//                             />
//                         </div>
//                         <center> <button type="submit" className='btn btn-outline-primary'onClick={"updated Sucess fully"} to={"/Devloper"}>Update
//                         </button>
//                             <Link className="btn btn-outline-danger mx-2" to={"/Devloper"} >cancel
//                             </Link></center>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
















