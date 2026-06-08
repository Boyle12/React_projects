import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  if (!data) {
    return <div className='text-center p-4 text-white bg-gray-600 text-3xl'>Loading GitHub Data...</div>
  }
/*
  const [data, setData] = React.useState([])
  useEffect(()=>{
    fetch('https://github.com/')
    .then((response)=> response.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])
  */


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center gap-4'>
      <div>Github followers: {data?.followers} </div>
      {data?.avatar_url && (
       <img src={data.avatar_url} alt="Github profile" width={300} className="rounded-full" />
      )}
      </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/Boyle12')
  const finalData = await response.json()
  return finalData
}