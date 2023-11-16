import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CreateEmp from "./CreateEmp";

export default function ListEmploye() {
  const [first, setfirst] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9845/delete/${id}`)
      .then((res) => console.log(res));
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const displayData = async () => {
      // axios.get("https://jsonplaceholder.typicode.com/users")
      // .then((res) =>setfirst(res.data))
      axios
        .get("http://localhost:9845/createemploye")
        .then((res) => setfirst(res.data))
        .catch((e) => console.log(e));
    };
    displayData();
  }, [searchQuery, first]);
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      /> */}
      <div className=" col-4 px-5 mb-3">
        <input
          type="text"
          class="form-control "
          id="textsearch"
          placeholder="Search Employee Names"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNumber</th>

            <th scope="col">City</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {first
          .filter((item) => {
            return searchQuery.toLocaleLowerCase() === ""
              ? item
              : item.empName.toLowerCase().includes(searchQuery);
          })
          .map((a, i) => (
            <tbody key={a._id}>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{a.empName}</td>
                <td>{a.empDesignation}</td>
                <td>{a.empEmail}</td>
                <td>{a.empPhoneNumber}</td>
                <td>{a.empCity}</td>

                <td>
                  {" "}
                  <Link to={`/EditEmploye/${a._id}`}>
                    {" "}
                    <BiSolidEditAlt />
                  </Link>
                </td>
                <td>
                  <RiDeleteBinLine onClick={() => handleDelete(a._id)} />
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
