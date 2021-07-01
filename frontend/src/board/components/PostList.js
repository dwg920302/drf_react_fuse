import React from 'react'
import { postList } from 'api'

const PostList = () => {

    const handleClick = e => {
        e.preventDefault()
        alert('Getting All List of Posts')
        postList()
        .then(res => {
            alert(`[Posts] ${JSON.stringify(res.data)}`)
        })
        .catch(err => {
            alert(`Error : ${err}`)
        }) 
    }

    return(
        <>
        <button onClick={handleClick}>Get Posts</button>  
        </>
    )
}

export default PostList