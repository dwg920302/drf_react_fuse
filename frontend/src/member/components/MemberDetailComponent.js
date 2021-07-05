import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router'

const MemberDetailComponent = () => {

  const [member, setMember] = useState({})

  const history = useHistory()
  
  useEffect(() => {
    setMember(JSON.parse(localStorage.getItem("selectedMember")))
//    setMember(JSON.parse(localStorage.getItem("loginedMember")))
  }, {})

  // 로그인 시 초장부터 여길 진입하면 null 에러가 발생함.
  // 아무래도 주소 받을 때 id를 같이 받아줘야 하고,
  // 진입 경로가 둘이라 그에 따라서 셋멤버 값을 다르게 받아줘야 함.


  //  useEffect(() => {
  //    memberDetail().
  //    then(res => {
  //        setMember(res.data)
  //    }).
  //    catch(err => {
  //        console.log(err)
  //    })
  //  }, [])

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

export default MemberDetailComponent