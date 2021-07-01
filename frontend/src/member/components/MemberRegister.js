import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import {memberRegister} from 'api'
import {useHistory} from 'react-router'

const MemberRegister = () => {

  const history = useHistory() // 브라우저의 기록이라 생각하면 됨

  const [userInfo, setUserInfo] = useState({
    username:'',
    password:'',
    name:'',
    email:''
  })

  const {username, password, name, email} = userInfo

  const handleChange = e => {
    const {value, name} = e.target
    setUserInfo({
        ...userInfo, [name]: value // key : value (json)
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Send Button Clicked. ${JSON.stringify({...userInfo})}`)
    const signupRequest = {...userInfo}

    memberRegister(signupRequest)
    .then(res => {
      alert(`회원가입 완료 : ${res.data.result}`)
      // alert(`회원가입 완료 : ${res.data}`)
      // history.push('login')
    })
    .catch(err => {
      alert(`회원가입 실패 : ${err}`)
    })
  }

  const handleCancel = e => {
    e.preventDefault()
    alert('Send Canceled')
  }

    return (<>
    <div className="signup">
    <form onSubmit={handleSubmit} method="post" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="username"><b>User ID</b></label>
    <input type="text" placeholder="Enter ID" onChange={handleChange} name="username" value={username} />
    <br/>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" value={password} />
    <br/>
    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Your Name" onChange={handleChange} name="name" value={name} />
    <br/>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" onChange={handleChange} name="email" value={email} />
    <br/>
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="submit" className="signupbtn">Sign Up</button>
      <button type="cancel" onClick={handleCancel} className="cancelbtn">Cancel</button>
    </div>
  </div>
</form>
</div>
</>)
}

export default MemberRegister