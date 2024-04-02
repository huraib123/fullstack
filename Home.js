import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {
    const [users,setusers]=useState([])

    useEffect(()=>{
      handle();
    },[])
    const {id}=useParams()
    const handle=async ()=>{
        const result= await axios.get("http://localhost:8080/users")
        setusers(result.data)
    }
    const deleteuser=async (id)=>{
     await axios.delete(`http://localhost:8080/user/${id}`)
     handle()
    }

  return (
    <div>
        <div className='container my-5 mx-5'>
    <table className="table my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>{
        return <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
      <Link type="button" class="btn btn-outline-secondary mx-2" to={`/Viewuser/${user.id}`}  >View</Link>
      <Link type="button" class="btn btn-outline-success mx-2" 
      to={`/edituser/${user.id}`}
      >Edit</Link>
      <button type="button" class="btn btn-outline-danger mx-2" onClick={()=>deleteuser(user.id)}>Delete</button>

      </td>
    </tr>
        
      })
    }
   
    
  </tbody>
</table>
</div>
    </div>
  )
}
