import React, { useState } from 'react'
import { memberDelete } from 'api'

const MemberDeleteForm = () => {

    const [userInfo, setUserInfo] = useState({
        username: localStorage.getItem("loginedMember"),
        password:''
      })

    const handleChange = e => {
        const {value, name} = e.target
        setUserInfo({
            ...userInfo, [name]: value // key : value (json)
        })
    }

    const handleSubmit = e => {
      e.preventDefault()
      alert(JSON.stringify(userInfo))
      // member.password = password
      memberDelete(userInfo)
      .then(res => {
        alert(`탈퇴 완료 : ${res.data.result} `)
        // history.push('login')
      })
      .catch(err => {
        alert(`탈퇴 실패 : ${err} `)
      })
    }

    return(<>
        <div className="delete">
            <form onSubmit={handleSubmit} method="delete">
                <div className="container">
                <h2 style={{"text-align":"center"}}>회원탈퇴</h2>
                <label>회원탈퇴를 진행하려면 이 계정의 비밀번호를 입력해주세요.</label>
                <br/><br/>
                <label labelFor="password"><b>비밀번호</b></label>
                <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" required/>
                <button type="submit" className="deletebtn">확인 (탈퇴)</button>
                </div>
            </form>
        </div>
        </>)
}

export default MemberDeleteForm