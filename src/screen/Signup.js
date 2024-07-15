import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const submitHandle = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });
    const json = await response.json()
    console.log(json)
    if(!json.success){
      alert("Fill all the Boxes Correctly......")
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandle}>
          <div className="mb-3">
            <label htmlFor="exampleInName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={onChange}
              value={credentials.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={credentials.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={onChange}
              value={credentials.password}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLocation1" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLocation1"
              name="location"
              onChange={onChange}
              value={credentials.location}
            />
          </div>

          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="btn m-3 btn-danger">
            Already a USer
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
