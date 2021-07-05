import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export const MemberMenu = () => {

    const history = useHistory()

    return (<nav>
        {
            localStorage.getItem("loginedMember") === ''?
            <ol>
            <li><Link to='/member/login'>로그인</Link></li>
            <li><Link to='/member/register'>회원가입</Link></li>
            </ol>
            :
            <ol>
            <li><Link to='/member/list'>회원목록</Link></li>
            <li><Link to='/member/retrieve'>회원이름조회</Link></li>
            <li><Link to='/member/detail/:id'>회원정보상세</Link></li>
            <li><Link to='/member/modify'>회원정보수정</Link></li>
            <li><Link to='/member/delete'>회원탈퇴(회원정보삭제)</Link></li>
            
            <li><Link onClick={() => {
                localStorage.setItem("loginedMember", "")
                history.push('/home')
                }}>로그아웃</Link></li>
            </ol>
        }
</nav>)}

export const ItemMenu = () => (<nav>
    <ol>
        <li><Link to='/item/list'>아이템 목록</Link></li>
        <li><Link to='/item/register'>아이템 등록</Link></li>
        <li><Link to='/item/retreive'>아이템 조회</Link></li>
        <li><Link to='/item/detail'>아이템 상세</Link></li>
        <li><Link to='/item/modify'>아이템 수정</Link></li>
        <li><Link to='/item/delete'>아이템 삭제</Link></li>
    </ol>
</nav>

)
export const BoardMenu = () => (<nav>
    <ol>
        <li><Link to='/board/list'>게시글 목록</Link></li>
        <li><Link to='/board/register'>게시글 쓰기</Link></li>
        <li><Link to='/board/retrieve'>게시글 조회</Link></li>
        <li><Link to='/board/update'>게시글 수정</Link></li>
        <li><Link to='/board/delete'>게시글 삭제</Link></li>
    </ol>
</nav>

)