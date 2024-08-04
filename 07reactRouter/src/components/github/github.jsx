import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [ data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/dipunjab')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return (

        <div className='text-center m-4 bg-gray-600 text-white text-3xl'>
            Github Followers: {data?.followers}
            <img src={data?.avatar_url} alt="git pic" width={300}/>
        </div>
    )
}

export default Github


export const githubInfoLloader = async()=>{
    const res = await fetch('https://api.github.com/users/dipunjab')
    return res.json()
}