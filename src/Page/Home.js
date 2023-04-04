// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import { Link, useNavigate, useParams } from 'react-router-dom';

// export default function Home() {

//     let navigate = useNavigate()

//     const [can, setcan] = useState([]);
//     const [devlo, setDevlo] = useState([]);
//     const [inputnm, setInputnm] = useState([]);
//     const [inputroll, setInputRoll] = useState([]);
//     const [bol, setBol] = useState(false)

//     const { name } = useParams()
//     useEffect(() => {
//         loaddeveloper();
//     }, []);

//     const loaddeveloper = async () => {
//         const Developer = await axios.get(`http://localhost:8089/Developer`);
//         console.log(Developer);
//         setDevlo(Developer.data);
//     };
    

    

//     const loadcandidate = async () => {
//         const candidate = await axios.get(`http://localhost:8089/Candidate`);
//         console.log(candidate);
//         setcan(candidate.data);
//     };
   
//     console.log(name)

//     let dev = {
//         name: inputnm,
//         role: inputroll
//     }

//     useEffect(() => {
//         console.log(dev);
//         setDevlo(dev)

//     }, [bol])

//     const { cid } = useParams()
//     useEffect(() => {
//         loadcandidate();
//     }, []);
    
//     const deleteCandidate = async (id) => {
//         await axios.delete(`http://localhost:8089/Candidate/${id}`);
//         loadcandidate()
//     };


//     return (
//         <div className='container my-4'>
 
//              {/* <Link className="btn btn-outline-primary" to="/Adduser">
//       Add Candidate
//       </Link>  */}
//             <div className='py-4'>
//                 <table className="table border shadow">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">cid</th>
//                             <th scope="col">name</th>
//                             <th scope="col">Devloper</th>
//                             <th scope="col">role</th>
//                             <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             can.map((candidate, index) => (
//                                 <tr>
//                                     <th scope="row" key={index}>
//                                         {index + 1}
//                                     </th>
//                                     <td>{candidate.cid}</td>
//                                     <td>{candidate.name}</td>
//                                     <td>
//                                         {
//                                             devlo.map((dev)=> {
//                                                 if(candidate.did === dev.did){
//                                                     return(dev.name)
                                            
//                                                 }
//                                             })
//                                         }
//                                     </td>
//                                     <td>{candidate.role}</td>
//                                     <td>
//                                         {/* <button className='btn btn-primary mx-2'>View</button> */}
//                                         <Link className='btn btn-outline-primary mx-2'
//                                             to={`/Viewuser/${candidate.cid}`}
//                                         >View</Link>
//                                         <Link className='btn btn-outline-primary mx-2'
//                                             to={`/Edituser/${candidate.cid}`}
//                                         >Edit</Link>
//                                         <button className='btn btn-danger mx-2'
//                                             onClick={() => deleteCandidate(candidate.cid)}>Delete..</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
