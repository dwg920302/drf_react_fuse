import React, {useState} from 'react'

const SignUp = () => {

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
        ...userInfo, [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Send Button Clicked. ${JSON.stringify({...userInfo})}`)
  }

  const handleCancel = e => {
    e.preventDefault()
    alert('Send Canceled')
  }

    return (<>
    <form onSubmit={handleSubmit} method="post" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="username"><b>User ID</b></label>
    <input type="text" placeholder="Enter ID" onChange={handleChange} name="username" value={username} />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" value={password} />

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Your Name" onChange={handleChange} name="name" value={name} />

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" onChange={handleChange} name="email" value={email} />
    
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
</>)
}

export default SignUp