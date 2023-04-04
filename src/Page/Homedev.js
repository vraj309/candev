// import React, { useEffect, useState } from 'react';
// import {Link, useNavigate, useParams } from 'react-router-dom';
// import axios, { Axios } from 'axios';


// export default function Homedev() {
//     const navigate = useNavigate();

//      const [dev,setDev]= useState([])
    
//     const {did}=useParams()

//     useEffect(()=>{
//             loaddeveloper();
//     }, []);

//     const loaddeveloper= async ()=>{
//         const Developer = await axios.get(`http://localhost:8089/Developer`);
//         console.log(Developer);
//         setDev(Developer.data);
//     };

//     const deletedevloper =async (id)=>{
//         await axios.delete(`http://localhost:8089/Developer/${id}`);
//         loaddeveloper()
//     };


//     const Editdeveloper = (did)=>{
//         navigate(`/Editdev/${did}`);
       
//     };

//     return (
//                 <div className='container my-4'>
//                             <Link className="btn btn-outline-primary" to="/Adddev">
//                             Add Devloper
//                             </Link>

//                     <div className='py-4'>
//                     <table className='table border shadow'>
//                     <thead>
//                             <tr>
//                                 <th scope="col"> # </th>
//                                 <th scope="col"> did </th>
//                                 <th scope="col"> name </th>
//                                 <th scope="col"> role </th>
//                                 <th scope="col"> Action </th>
//                             </tr>
//                   </thead>

//                         <tbody>   
//                             {
//                                 dev.map((Developer,index)=>(
//                                 <tr>   
//                                     <th scope="row"key={index}>
//                                             {index+1}  
//                                     </th>       
//                                             <td>{Developer.did}</td>
//                                             <td>{Developer.name}</td>
//                                             <td>{Developer.role}</td>
//                                       <td>
                                            
//                                             <button  className='btn btn-outline-primary mx-2'
//                                             onClick={()=>Editdeveloper(Developer.did)}>Edit</button>

//                                              <button className='btn btn-danger mx-2'
//                                             onClick={()=> deletedevloper(Developer.did)}>Delete..</button>

//                                      </td>
//                                 </tr>
//                                     ))
//                                 }
//                             </tbody>
//                     </table>
//              </div>
//          </div>
//      );
// }
