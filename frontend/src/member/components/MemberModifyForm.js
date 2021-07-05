import React, {useState} from 'react'
import { memberModify } from 'api'

const MemberModifyForm = () => {

    const [userInfo, setUserInfo] = useState({
        username: localStorage.getItem("loginedMember"),
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
    const modifyRequest = {...userInfo}

    memberModify(modifyRequest)
    .then(res => {
      alert(`정보수정 완료 : ${res.data.result}`)
      // alert(`회원가입 완료 : ${res.data}`)
      // history.push('login')
    })
    .catch(err => {
      alert(`정보수정 실패 : ${err}`)
    })
  }

  const handleCancel = e => {
    e.preventDefault()
    alert('Send Canceled')
  }

    return (<>
        <div className="modify">
        <form onSubmit={handleSubmit} method="put" style={{border:"1px solid #ccc"}}>
      <div className="container">
        <h1>회원정보수정</h1>
        <p>Please fill in this form to change status.</p>
        <hr/>
        <label for="username"><b>ID : {localStorage.getItem("loginedMember")}</b></label>
        <br/>
        <label for="psw"><b>Password Change</b></label>
        <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" value={password} />
        <br/>
        <label for="name"><b>Name Change</b></label>
        <input type="text" placeholder="Enter Your Name" onChange={handleChange} name="name" value={name} />
        <br/>
        <label for="email"><b>Email Change</b></label>
        <input type="text" placeholder="Enter Email" onChange={handleChange} name="email" value={email} />
        <br/>
        <div class="clearfix">
          <button type="submit" className="signupbtn">Change</button>
          <button type="cancel" onClick={handleCancel} className="cancelbtn">Cancel</button>
        </div>
      </div>
    </form>
    </div>
    </>)
}

export default MemberModifyForm