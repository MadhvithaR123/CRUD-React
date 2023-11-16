import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();
    const [userName, setUsername] = useState("");
    const [status, setstatus] = useState("");
    const [Password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          username: userName,
          password: Password,
        };
        console.log(data);
        const res = await axios.post("http://localhost:9845/register", data).catch(e=>console.log(e))
        console.log(res)

        if(res.status == 200 ){
          setstatus(res.data)
        }else if(res.status == 201){
          setstatus(res.data)
          navigate('/')
        }
        // console.log("dsadas",typeof )
         
      };

  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <form onSubmit={handleSubmit}>
            <div className="col-12">
              <div
                className="card bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "400px" }}
              >
                <div className="card-body p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Sign Up</h2>
                  <p className="text-white-50 mb-3">
                    Please enter your login and password!
                  </p>

                  <div className="mb-4">
                    <label htmlFor="userName" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      placeholder="Username"
                      value={userName}
                      onChange={(e) => setUsername(e.target.value)} required
                    />
                    {/* <input type="text" className="form-control form-control-lg" id="userName"/> */}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {/* <input type="password" className="form-control form-control-lg" id="password" value={Password}  onChange={(e)=>setPassword(e.target.value)}  /> */}
                  </div>

                  <button className="btn btn-primary "> signup</button>
                  {status.message}
                  <Link to="/"><p className="text-end pt-5">Click to SignIn</p></Link>

                  {/* <hr className="my-4" /> */}
                </div>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}
