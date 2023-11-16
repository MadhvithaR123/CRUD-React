import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { BiReset } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';


// useparam is used to get data from url like id mention name called id 
import {useParams} from "react-router-dom"

export default function EditEmploye(props) {

  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");

  const {id}=useParams()
  const navigate = useNavigate();

  useEffect(()=>{
   async function getinfo(){
      await axios.get(`http://localhost:9845/EditEmploye/${id}`)
      .then((res)=>{
        setName(res.data.empName)
        setDesignation(res.data.empDesignation)
        setEmail(res.data.empEmail)
        setPhone(res.data.empPhoneNumber)
        setCity(res.data.empCity)
      })

     
    }
    getinfo()

  } ,[] )
  // [] didmount when comp loaded to browser it will run omly one time
  // [state] did update 
  // return (()=>{did unmount})

  const resetValues=()=>{
    
  }
  const handleupdate =(e)=>{
    try {
      e.preventDefault();
      const EmployeData={
        "empName":Name,
        "empDesignation":Designation,
        "empEmail":Email,
        "empPhoneNumber":Phone,
        "empCity":City
    
    
      }
    
      console.log(EmployeData)


      var  response = axios.put(`http://localhost:9845/employe/${id}`,EmployeData)
      .then(res=>navigate('/ListEmploye')).catch(e=>console.log(e))

      console.log(response)
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      
    
     <div className=" pt-5  ">
        <div className="">
          <div className="d-flex flex-column align-items-center justify-content-center p-5 ">
            <form >
            {/* onSubmit={handleSubmit} */}

              <div className="mb-3">
             
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=" Name"
                  value={Name}
                  onChange={(e) => setName( e.target.value )}
                />
              </div>
              <div className="mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="Designation"
                  placeholder="Designation"
                  value={Designation}
                  onChange={(e) => setDesignation( e.target.value )}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="Email-ID"
                  // value={item.email}
                  value={Email}
                  onChange={(e) => setEmail( e.target.value )}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Phone-number"
                  placeholder=" Phone Number"
                  value={Phone}
                  onChange={(e) => setPhone( e.target.value )}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City"
                  value={ City}
                  onChange={(e) => setCity( e.target.value )}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginRight: 30 }}
                onClick={handleupdate}
              >
                update
              </button>
              {/* <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: 30 }}
                onClick={()=>resetValues()}
              > 
                Reset<BiReset  color="white" size={18} />
              </button> */}
            </form>
          </div>
        </div>
      </div>
      
     {/* <div className=" pt-5  ">
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
      </div> */}
    
      </div>
  )
}
