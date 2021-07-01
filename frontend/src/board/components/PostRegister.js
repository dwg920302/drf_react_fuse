import React, {useState} from 'react'
import {postWrite} from 'api'
import {Button} from '@material-ui/core'

const PostRegister = () => {

    const [post, setPost] = useState({
        title: '',
        content: ''
    })

    const {title, content} = post

    const handleChange = e => {
      const {value, name} = e.target
      setPost({
          ...post, [name]: value // key : value (json)
      })
    }

    const handleCancel = e => {
        e.preventDefault()
        alert('Submit Canceled')
      }

    const handleSubmit = e => {
        e.preventDefault()
        alert(`Submit Button Clicked. ${JSON.stringify({...post})}`)
        const postwriteRequest = {...post}
    
        postWrite(postwriteRequest)
        .then(res => {
          alert(`글쓰기 완료 : ${res.data.result}`)
        })
        .catch(err => {
          alert(`글쓰기 실패 : ${err}`)
        })
      }
    

    return (<>
    <div className="postwrite">
    <form onSubmit={handleSubmit} method="post" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>게시글 쓰기</h1>
    <p></p>
    <hr/>

    <label for="title"><b>title</b></label>
    <input type="text" placeholder="imput Title" onChange={handleChange} name="title" value={title} />
    <br/>
    <label for="content"><b>Content</b></label>
    <br/>
    <container>
    <input type="text" placeholder="write Content" onChange={handleChange} name="content" value={content} />
    </container>
    

    <div class="clearfix">
      <button type="submit" className="signupbtn">Submit</button>
      <button type="cancel" onClick={handleCancel} className="cancelbtn">Cancel</button>
    </div>
  </div>
</form>
</div>
</>)
}

export default PostRegister