import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Await, Link, useNavigate, useParams} from "react-router-dom";

export default function Editdev() {

    let navigate=useNavigate()

    const {did}=useParams()

    const [developer,setDeveloper]=useState({
            did:"",   
            name:"",
            role:""
    })
   

    useEffect(() =>{
            loadDeveloper();

    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8089/Developer`, developer);
            navigate("/");
    };

    const loadDeveloper =async ()=>{
       
        const developer= await axios.get(`http://localhost:8089/Developer/${did}`);
        setDeveloper(developer.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <center><h2 className='text-center m-4'> View Developer</h2></center>
              
                <div className='card'>
                    <div className='card-header'><center><b>Details of Developer : </b><u><b>{developer.name}</b></u></center>
                     <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                        <b>did: </b>
                        <u>{developer.did}</u>
                        </li>

                        <li className="list-group-item">
                        <b>name:  </b>
                        <u> {developer.name} </u>
                        </li>

                        <li className="list-group-item">
                        <b>role:  </b>
                        <u>  {developer.role}  </u>
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




