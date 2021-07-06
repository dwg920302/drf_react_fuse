import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import { memberDetail } from 'api'

const MemberDetailComponent_1 = () => {

  const [member, setMember] = useState({})

  useEffect(() => {

    memberDetail(localStorage.getItem("loginedMember")).
    then(res => {
        setMember(res.data)
    }).
    catch(err => {
        alert(err)
    })
  }, {})

    return (<>
              <div className="member-detail-card">
                <h2 style={{"text-align":"center"}}>회원 정보</h2>
                <img src="https://www.w3schools.com/w3images/team2.jpg"  style={{"width":"100%"}}/>
                <h1>{member.name}</h1>
                <h3>{member.username}</h3>
                <h3>{member.email}</h3>
                    <p className="member-detail-title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div style={{"margin": "24px 0"}}>
                      <a className="member-detail-a" href="#"><i className="fa fa-dribbble"></i></a> 
                      <a className="member-detail-a" href="#"><i className="fa fa-twitter"></i></a>  
                      <a className="member-detail-a" href="#"><i className="fa fa-linkedin"></i></a>  
                      <a className="member-detail-a" href="#"><i className="fa fa-facebook"></i></a> 
                    </div>
                    <p><button className="member-detail-button">Contact</button></p>
                </div>
    </>)
}

export default MemberDetailComponent_1