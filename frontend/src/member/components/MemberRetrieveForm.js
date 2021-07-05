import React, { useState } from 'react'
import { memberRetrieve } from 'api'

const MemberRetrieveForm = () => {

    const [password, setPassword] = useState({})

    const handleChange = e => {
        const {value, name} = e.target
        setPassword({
            ...password, [name]: value // key : value (json)
        })
    }

    const handleSubmit = e => {
      e.preventDefault()
      memberRetrieve({password})
      .then(res => {
        alert(`탈퇴 완료 : ${res.data.result} `)
        // history.push('login')
      })
      .catch(err => {
        alert(`탈퇴 실패 : ${err} `)
      })
    }

    return(<>
    <h2>회원이름조회</h2>
        <div className="get">
            <form onSubmit={handleSubmit} method="get">
                <div className="container">
                <h2 style={{"text-align":"center"}}>회원이름조회</h2>
                <label>검색할 아이디(username) 입력</label>
                <br/><br/>
                <label labelFor="username"><b>ID</b></label>
                <input type="username" placeholder="Enter ID to search" onChange={handleChange} name="username" required/>
                <button type="submit" className="searchbtn">확인 (탈퇴)</button>
                </div>
            </form>
        </div>
        </>)
}

export default MemberRetrieveForm