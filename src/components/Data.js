import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Data() {
const [getData, setGetData] = useState()
    const { userName } = useParams();
     
    useEffect(()=>{
        fetch(`https://api.github.com/users/${userName}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setGetData(data)
            console.log(data)
        })
    },[])

    if(getData){

    
  return (
    <div>
        <div className="profilePic">
            <img className='profileimage' src={getData.avatar_url} alt="" />
        </div>
        <main className="main container">
            <div className="details container">
            <Link style={{textDecoration:'none'}} target='_blank' to={`https://github.com/${userName}`}><p className="mydata nameID">{getData.name}</p></Link>
                <p className="mydata bio">{getData.bio}</p>
                <p className="mydata name">Name : <span style={{color:'white'}}>{getData.name}</span></p>
                <p className="mydata location">Location : <span style={{color:'white'}}>{getData.location}</span></p>
                 <div className="buttons container">
                    <Link target='_blank' to={`https://github.com/${userName}?tab=repositories`}><button className='btn options'>Reposotory</button></Link>
                    <Link target='_blank' to={`https://github.com/${userName}?tab=followers`}><button className='btn options'>Follower {getData.followers}</button></Link>
                    <Link target='_blank' to={`https://github.com/${userName}?tab=following`}><button className='btn options'>Following {getData.following}</button></Link>
                    <Link target='_blank' to={`https://github.com/${userName}`}><button className='btn options'>Profile</button></Link>
                 </div>
            </div>
        </main>
    </div>
  )
}
}
