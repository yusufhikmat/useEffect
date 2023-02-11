import React,{useState, useEffect} from 'react'
import axios from 'axios'
const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })

        .catch((err)=>{
            return console.log(err)
        })
    },[id])
    const handleChange = (e) =>{
        setId(e.target.value)
    }
  return (
    <div>
    <input type="text"
        value={id} 
        onChange = {handleChange}
        />
        <p>{post.title}</p>
    </div>
  )
}

export default DataFetching