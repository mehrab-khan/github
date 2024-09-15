import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const [username, setUserName] = useState()
    const navigate = useNavigate()
    const submit = () =>{
        if (username){
            navigate(`/searchQuery/${username}`)
        }
        else{
            alert('Please Fill The From')
        }
    }
  return (
    <div className='homeContainer'>
      <div className="container search">
        <p className="title">Github Search</p>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Username ' className='form-control userNameInput' />
        <button className='btn searchBtn' onClick={submit}>Search</button>
        
      </div>
    </div>
  )
}
