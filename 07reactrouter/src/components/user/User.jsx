import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams() 
    return (
      <div className="p-4 text-center bg-black text-white">user : {userid}</div>
    )
}

export default User
