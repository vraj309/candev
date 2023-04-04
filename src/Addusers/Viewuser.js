import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Await, Link, useNavigate, useParams} from "react-router-dom";

export default function Edituser() {

    let navigate=useNavigate()

    const {cid}=useParams()

    const [candidate,setCandidate]=useState({
            cid:"",   
            name:"",
            did:"",
            role:""
    })
    

    useEffect(() =>{
        loadcandidate();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8089/Candidate`, candidate);
            navigate("/");
    };

    const loadcandidate =async()=>{
        const candidate= await axios.get(`http://localhost:8089/Candidate/${cid}`)
        setCandidate(candidate.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <center><h2 className='text-center m-4'> View Candidate</h2></center>
              
                <div className='card'>
                    <div className='card-header'><center><b>Details of Candidate :  </b><u><b>{candidate.name}</b></u></center>
                     <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                        <b>cid: </b>
                        <u>{candidate.cid}</u>
                        </li>

                        <li className="list-group-item">
                        <b>name:  </b>
                        <u> {candidate.name} </u>
                        </li>

                        <li className="list-group-item">
                        <b>did:  </b>
                        <u>{candidate.did} </u>
                        </li>

                        <li className="list-group-item">
                        <b>role:  </b>
                        <u>  {candidate.role}  </u>
                        </li>
                        </ul>
                     </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  );
}




