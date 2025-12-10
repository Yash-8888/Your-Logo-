import { useState } from 'react'
import { useEffect } from 'react';

const Github = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch('https://api.github.com/users/Yash-8888')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, [])
    
  return (
    <div className="bg-gray-600 text-white p-6 m-6 rounded-lg text-center font-bold">
      {data ? (
        <div>
          <img src={data.avatar_url} alt="avatar" className="w-32 h-32 rounded-full mx-auto mb-4"/>
          <h2 className="text-2xl mb-2">{data.name}</h2>
          <p className="text-xl"> Followers : {data.followers} </p>
       </div>
      ): (
        <p>Loading...</p>
      )}
    </div> 
  )
}

export default Github
