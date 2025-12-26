import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
   // const[data,setdata] = useState([])
   // useEffect(()=>{
   //     fetch("https://api.github.com/users/zainulabedin-devsec")
   //     .then(response=>response.json())
   //     .then(data=>{
   //     console.log(data)
   //     setdata(data)
   // }
//)
   // },[])
    const data = useLoaderData()
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
  <img
    src={data.avatar_url}
    alt="My GitHub profile pic"
    className="w-32 h-32 rounded-full shadow-lg mb-4"
  />
  <p className="text-lg font-semibold text-gray-800">
    GitHub Followers: <span className="text-orange-600">{data.followers}</span>
  </p>
</div>
 )
}

export default Github

export const gitInfoLoader = async () => {
 const response   = await fetch("https://api.github.com/users/zainulabedin-devsec")
 return response.json()


}