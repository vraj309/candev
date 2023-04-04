// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import '../Components-CSS/Home.css';
// import { Link, useParams } from 'react-router-dom'
// import { Button } from 'bootstrap';
// // import { useNavigate } from 'react-router-dom'

// export default function AddStudent() {

//     // let navigate = useNavigate()

//     const [student, setStudent] = useState({
//         sID: 0,
//         sName: "",
//         cId: 0
//     })

//         // const [sidForEdit, editSidForEdit] = useState()
//         // const [ustudent, setUstudent] = useState({
//         //     sid: 0,
//         //     sName: "",
//         //     cId: 0
//         // })
//     const [classes, setClasses] = useState([])
//     // const { sName, cId } = student
//     const [id, setId] = useState(0)
//     const [inputName, setInputName] = useState("")
//     const [bool, setBool] = useState(false);
//     const [sid, setSid] = useState(0)
//     const [stude, setStude] = useState([]);
//     const [clss, setClss] = useState([]);
//     const [clsid, setClsid] = useState(0);
//     const [cbool, setCbool] = useState(false);
//     let stud = {
//         sID: sid,
//         sName: inputName,
//         cId: id,
//     }


//     const onInputChange = (e) => {
//         // setstudentForName({ ...student, [e.target.name]: e.target.value });
//         if (e.target.name === "sName") {
//             setInputName(prev => e.target.value)

//         }
//     };



//     useEffect(() => {
//         loadClasses();
//     }, [])

//     const loadClasses = async () => {
//         const result = await axios.get('http://localhost:8081/classes')
//         // console.log(result.data);
//         setClasses(result.data);
//         setClss(result.data);
//     }

//     useEffect(() => {
//         loadStudent();
//     }, []);

//     const loadStudent = async () => {
//         const result = await axios.get("http://localhost:8081/student");
//         setStude(result.data);
//     }
//     const onSubmit = async (e) => {
//         e.preventDefault();
//         let update = {
//             sID: sid,
//             sName: inputName,
//             cId: id
//         }
//         setStudent(prev => update)
//         console.log(student);
//         // await axios.put("http://localhost:8081/student", student)
//         // update = {
//         //     sid: sid,
//         //     sName: inputName,
//         //     cId: id
//         // }

//         // console.log(update);
        
//         // setUstudent(prev => update)
//         // console.log(update);

//         // console.log("ustudent", ustudent);
//         if (cbool === true) {
//             await axios.put("http://localhost:8081/student", student)
//         } else {
//             await axios.post("http://localhost:8081/student", student)
//         }
//         loadClasses();

//     }


//     const editData = async (sID) => {
//         // console.log("Hello");

//         const result = await axios.get(`http://localhost:8081/student/${sID}`)
//         setCbool(prev => true);
//         // setUstudent(result.data);
//         setInputName(result.data.sName);
//         setSid(result.data.sID)
//         setClsid(prev => result.data.cId);
//         // editSidForEdit(result.data.sID)
//         // console.log(sidForEdit);
//         // console.log(editDataFor);
//     }


//     // let update = {
//     //     sId: sid,

//     // }
//     const handleclasseschange = (e) => {
//         classes.map((classes) => {
//             if (classes.cName === e.target.value) {
//                 setId(ID => classes.cID)
//                 // console.log(classes);
//             }
//         })
//         stud = {
//             sID: 0,
//             sName: inputName,
//             cId: id
//         }

//         // console.log(id);
//         setBool(!bool)
//     }

//     useEffect(() => {

//         // console.log(stud);

//         setStudent(prev => stud)
//         // console.log(student);
//     }, [bool])

//     const deleteStudent = async (sID) => {
//         await axios.delete(`http://localhost:8081/student/${sID}`)
//         loadStudent()
//     }

//     return (
//         <div className='container my-3'>


//             <h5 className='text-center'>Add Student</h5>
//             <div className='row my-3'>
//                 <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
//                     <form onSubmit={(e) => onSubmit(e)}>
//                         <div className='mb-3'>
//                             <label htmlFor='Name' className='form-label'>
//                                 Name
//                             </label>
//                             <input type='text' className='form-control mb-4' name='sName' value={inputName} onChange={(e) => onInputChange(e)} required />

//                             <label htmlFor='Class ID' className='form-label'>
//                                 Class
//                             </label>
//                             {/ <input type='text' className='form-control mb-4' name='cId' value={cId} onChange={(e)=>onInputChange(e)} required/> /}
//                             <select className='form-control' onChange={(e) => handleclasseschange(e)}>
//                                 {
//                                     classes.map((cls) => {
//                                         // console.log(clsid);
//                                         if (clsid === cls.cID) {
//                                             return (
//                                                 <option value={cls.cName} selected>{cls.cName}</option>
//                                             )
//                                         }
//                                         else {
//                                             return (
//                                                 <option value={cls.cName}>{cls.cName}</option>
//                                             )
//                                         }

//                                     })
//                                 }
//                             </select>

//                         </div>

//                         <center>
//                             <button type="submit" className='btn btn-outline-dark'>Submit</button>
//                         </center>
//                     </form>
//                 </div>
//             </div>

//             <div className='container my-4'>

//                 <h5 className='text-center'>Student Data</h5>
//                 <div className='py-4'>
//                     <table className="table border shadow">
//                         <thead>
//                             <tr align='center' className='bg-light'>
//                                 <th scope="col" className='p-4'>Student ID</th>
//                                 <th scope="col" className='p-4'>Name</th>
//                                 <th scope="col" className='p-4'>Class</th>
//                                 <th scope="col" className='p-4'>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 stude.map((stude, index) => (
//                                     <tr className='p-4'>
//                                         <td align='center'>{stude.sID}</td>

//                                         <td align='center'>{stude.sName}</td>
//                                         {/ <td align='center'>{student.cId}</td>  /}

//                                         <td align='center'>
//                                             {
//                                                 clss.map((cls) => {
//                                                     // console.log(cls);
//                                                     // console.log(student.cId);/
//                                                     if (stude.cId === cls.cID) {
//                                                         return (
//                                                             cls.cName
//                                                         )
//                                                     }
//                                                 })
//                                             }
//                                         </td>

//                                         <td align='center'>
//                                             <button className='btn btn-outline-primary mx-1'
//                                                 onClick={() => { editData(stude.sID) }}
//                                             >Edit</button>

//                                             <Link className='btn btn-outline-danger mx-1'
//                                                 onClick={() => deleteStudent(stude.sID)}
//                                             >Delete</Link>
//                                         </td>

//                                     </tr>
//                                 ))
//                             }

//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }
