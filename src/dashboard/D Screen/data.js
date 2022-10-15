import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllData = () => {
    const [data, setData] = useState([])
    

    let getData = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>setData(res.data))
        .catch((err) => {
            console.log(err);
        })
    }

    console.log('data==========>', data);

    


    useEffect(()=>{
        getData()
    }, [])


  return (
    <>
    <h1>Hello World</h1>
    <hr />
    {
        data.map((e,i)=><h1>{e.title} <hr /></h1>)
    }
    </>

    
  )
}

export default AllData