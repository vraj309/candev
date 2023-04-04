import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';

 export default function Navbar() {
  return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
            <div className="container-fluid">
                <a  className="navbar-brand" href="..">
                    <b> Full-Stack </b>
                </a>
          <div class="collapse navbar-collapse" id="navbarNav">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                <div class="collapse navbar-collapse" id="navbarNav"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Candidate</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active"aria-current="page" href="/Devloper">Developer</a>
                        </li>
                    </ul>
                </div>
                    <button
                        className="navbar-toggler"
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
        </nav>  
          
    </div>
  );
}

