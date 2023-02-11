import React,{useState, useEffect} from 'react'
import axios from 'axios'
const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [buttonId, setButtonId]=  useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })

        .catch((err)=>{
            return console.log(err)
        })
    },[buttonId])
    const handleChange = (e) =>{
        setId(e.target.value)
    }

    const handleButton = () =>{
        setButtonId(id)
    }
  return (
    <div>
    <input type="text"
        value={id} 
        onChange = {handleChange}
        />
        <button onClick ={handleButton}>Fetch Data</button>
        <p>{post.title}</p>
    </div>
  )
}

export default DataFetching