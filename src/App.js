
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";  
import Navbar from './layout/Navbar';
import Home from "./Page/Home";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Adduser from "./Addusers/Adduser";
import Edituser from "./Addusers/Edituser";
import Viewuser from "./Addusers/Viewuser";
import Navbardev from './layout/Navbardev';
import Homedev from './Page/Homedev';
import Adddev from './Adddevcom/Adddev';
import Editdev from './Adddevcom/Editdev';

export default function EditApp() {
  return (
    <div className="App">
        <Router> 
        <Navbar/>
        <Routes>  
        {/* <Route exact  path="/" element={<Home />}/> */}
        <Route exact  path="/" element={<Adduser/>}/>
        {/* <Route exact path="/Edituser/:cid" element={<Edituser/>}/> */}
        {/* <Route exact path="/Viewuser/:cid" element={<Viewuser/>}/> */}
        {/* <Route exact path="/Devloper" element={<Homedev />} /> */}
           <Route exact path="/Devloper" element={<Adddev />} />
            {/* <Route exact path="/Editdev/:id" element={<Editdev />} /> */}
       </Routes>
     </Router>
    </div>
  )
}
