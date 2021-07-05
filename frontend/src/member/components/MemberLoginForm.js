import React, { useState } from 'react'
import { memberLogin } from 'api'
import { useHistory } from 'react-router'


const MemberLoginForm = () => {

  const history = useHistory()

  const [loginInfo, setLoginInfo] = useState({
    username:'',
    password:''
  })

  const {username, password} = loginInfo

  const handleChange = e => {
    const {value, name} = e.target
    setLoginInfo({
      ...loginInfo, [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Login Button Clicked. ${JSON.stringify({...loginInfo})}`)
    const loginRequest = {...loginInfo}

    memberLogin(loginRequest)
    .then(res => {
      alert(`${res.data.result}, \nWelcome, ${res.data.username}`)
      localStorage.setItem("loginedMember", res.data.username)
      history.push('/home')
    })
    .catch(err => {
      alert(`로그인 실패 : ${err.result}`)
    })

  }

  const handleCancel = e => {
    e.preventDefault()
    alert('Login Cancelled')
  }

    return (<>
    <div className="login">
    <h2>Login</h2>

<form onSubmit={handleSubmit} method="get">
  <div className="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" style={{width: "300px"}} alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <label for="username"><b>Username</b></label>
    <input type="text" onChange={handleChange} placeholder="Enter Username" name="username" value={username} required/>

    <label for="password"><b>Password</b></label>
    <input type="password" onChange={handleChange} placeholder="Enter Password" name="password" value={password} required/>
        
    <button type="submit">Login</button>
  </div>
  <div>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" style={{backgroundColor: "#f1f1f1"}}>
    <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</div>
    </>)
}

export default MemberLoginForm