import React, { useState } from 'react'
import { memberRetrieve } from 'api'

const MemberRetrieveForm = () => {

    const [username, setUsername] = useState('')

    const handleChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
      e.preventDefault()
      memberRetrieve(username)
      .then(res => {
        alert(`검색 완료 : ${res.data.result} `)
        // history.push('login')
      })
      .catch(err => {
        alert(`검색 실패 : ${err} `)
      })
    }

    return(<>
        <div className="get">
            <form onSubmit={handleSubmit} method="get">
                <div className="container">
                <h2 style={{"text-align":"center"}}>회원이름조회</h2>
                <label>검색할 아이디(username) 입력</label>
                <br/><br/>
                <label labelFor="username"><b>ID</b></label>
                <input type="username" placeholder="Enter ID to search" onChange={handleChange} name="username" required/>
                <button type="submit" className="searchbtn">검색</button>
                </div>
            </form>
        </div>
        </>)
}

export default MemberRetrieveForm