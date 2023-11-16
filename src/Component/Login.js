import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: userName,
      password: Password,
    };
    console.log(data);
    try {
      const res = await axios.post("http://localhost:9845/login", data)
      console.log("palani",res)
      
    if(res.status == 200) {
      setStatus(res.data)
      navigate('/Home')
    }else{
      seterror(res.data)
    }
    } catch (error) {
      seterror(error.response.data)
      
    }
   
      // .then((res) =>Navigate('/register'))
      // .catch((e) => console.log(e));
    // console.log("res",res)



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
                  <h2 className="fw-bold mb-2 text-center">Sign In</h2>
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
                      onChange={(e) => setUsername(e.target.value)}
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
                    />
                    {/* <input type="password" className="form-control form-control-lg" id="password" value={Password}  onChange={(e)=>setPassword(e.target.value)}  /> */}
                  </div>

                  <button className="btn btn-primary btn-lg">Login</button>
                  <Link to="signup"><p className="text-end pt-5">Click to Signup</p></Link>

                  {/* <button className="btn btn-primary mb-4" onSubmit={handleSubmit}> signup</button> */}
                  {status.message}
                  <p className="text-danger text-center">{error.message}</p>

                  {/* <hr className="my-4" /> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
