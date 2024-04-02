// import axios from 'axios';
// import React, { useState } from 'react'

// import { Link, useNavigate } from 'react-router-dom'
// export default function Adduser() {
//     // let navigate=useNavigate()
//     // const [user,setuser]=useState({
//     //     "name":"",
//     //     "username":"",
//     //     "email":""
//     // })
//     // const{name,username,email}=user;

//     // const handleinput=(e)=>{
//     //    setuser({...user,[e.target.name]:e.target.value})
//     // }
//     // const onsubmit=async (e)=>{
//     //  e.preventDefault()
//     // await axios.post("http://localhost:8080/user",user)
//     // navigate("/")
//     // }
//     let navigate = useNavigate();

//     const [user, setUser] = useState({
//       name: "",
//       username: "",
//       email: "",
//     });
  
//     const { name, username, email } = user;
  
//     const onInputChange = (e) => {
//       setUser({ ...user, [e.target.name]: e.target.value });
//     };
  
//     const onSubmit = async (e) => {
//       e.preventDefault();
//       await axios.post("http://localhost:8080/user", user);
//       navigate("/");
//     };
  
//   return (
//     <div>
//       <div className='container my-5'>
//         <div className="row">
//             <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//                 <h2 className="text-center m-4">Registration Form</h2>
//                 <form onSubmit={(e) => onSubmit(e)}>
//                 <div className="mb-3">
//                     <label htmlFor='Name' className="form-label"><h5>Name</h5></label>
//                     <input type="text" className='form-control'  onChange={(e) => onInputChange(e)} placeholder='Enter Your Name' name="name" value={name}/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor='username' className="form-label"><h5>Username</h5></label>
//                     <input type="text" className='form-control'  onChange={(e) => onInputChange(e)} placeholder='Enter Your username' name="username" value={username} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor='email' className="form-label"><h5>Email</h5></label>
//                     <input type="text" className='form-control'  onChange={(e) => onInputChange(e)} placeholder='Enter Your Email' name="email" value={email}/>
//                 </div>
//                 <button type="button" class="btn btn-outline-success" >Submit</button>
//                 <Link type="button" class="btn btn-outline-danger mx-3" to="/">Cancel</Link>
//                 </form>
//             </div>

//         </div>
//       </div>
//     </div>
//   )
// }
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}