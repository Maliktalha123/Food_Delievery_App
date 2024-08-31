import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const submitHandle = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Fill all the Boxes Correctly...");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);

      localStorage.setItem("authToken", json.authToken);
      navigate("/");
      console.log(localStorage.getItem("authToken"));
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
          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="btn m-3 btn-danger">
            Create A New Account
          </Link>
        </form>
      </div>
    </>
  );
}

export default LogIn;
