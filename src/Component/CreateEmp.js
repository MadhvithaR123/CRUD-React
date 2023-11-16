import axios from "axios";
import React, {  useState } from "react";
import { BiReset } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function CreateEmp() {
  // Name=object setName is a function, usestate is use to update the sate values of the comp
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  // const [status1,setStatus] = useState()
  const navigate = useNavigate();


  // handlesubmit is used to submit data when it clicks action 
  const handleSubmit = async(e)=>{    
    e.preventDefault();
  const EmployeData={
    "empName":Name,
    "empDesignation":Designation,
    "empEmail":Email,
    "empPhoneNumber":Phone,
    "empCity":City


  }

  console.log(EmployeData)
//axios is use to for API calls
 await axios.post("http://localhost:9845/createemploye",EmployeData)
  .then((res)=>navigate('/ListEmploye')).catch((e)=>console.log(e))

// console.log("Reciveddata",Reciveddata);
//   if(status1 == "201"){
//     setName("");
//     setDesignation("");
//     setEmail("");
//     setPhone("");
//     setCity("")
//   }else{
//     console.log("something to worng")
//   }
  
  }
  const resetValues=()=>{
    setName("");
    setDesignation("");
    setEmail("");
    setPhone("");
    setCity("")
  }
  
  
  return (
    <div>
      
      <div className=" pt-5  ">
        <div className="">
          <div className="d-flex flex-column align-items-center justify-content-center p-5 ">
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=" Name"
                  value={Name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="Designation"
                  placeholder="Designation"
                  value={Designation}
                  onChange={(e)=>setDesignation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="Email-ID"
                  value={Email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Phone-number"
                  placeholder=" Phone Number"
                  value={Phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City"
                  value={City}
                  onChange={(e)=>setCity(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginRight: 30 }}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: 30 }}
                onClick={()=>resetValues()}
              > 
                Reset<BiReset  color="white" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
