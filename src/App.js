
import './App.css';
import CreateEmp from './Component/CreateEmp';
import {Routes,Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import ListEmploye from './Component/ListEmploye';
import EditEmploye from './Component/EditEmploye';
import Login from './Component/Login';
import Signup from './Component/Signup';
// import Spacer from './Component/Spacer';

function App() {
  return (
    <div className="App">
      <div className='top-space'></div>
      
      {/* <Spacer height="50px"/> */}
      <Navbar/>
<p>madhvitha rajeshwari</p>
      <Routes>
    <Route path="/" element={ <Login/> } />
    <Route path="signup" element={ <Signup/> } />

    <Route path="/Home" element={ <Home/> } />
    <Route path="ListEmploye" element={ <ListEmploye/> } />
    <Route path="CreateEmp" element={ <CreateEmp/> } />
    <Route path="EditEmploye/:id" element={ <EditEmploye/> } />

  </Routes>

    </div>
  );
}

export default App;
