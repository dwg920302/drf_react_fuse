import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type': 'application/json'}
const headers_xml = {'Content-Type': 'application/xml'}

export const memberDetail = id => axios.get(`${SERVER}api/member/detail/${id}`)
export const memberDelete = body => axios.put(`${SERVER}api/member/delete`, {headers, body})
// 본래는 delete여야 하는데, delete가 request.get을 먹지를 않음
export const memberList = () => axios.get(`${SERVER}adm/member/list`)
export const memberLogin = body => axios.post(`${SERVER}api/member/login`, {headers, body})
export const memberModify = body => axios.put(`${SERVER}api/member/modify`, {headers, body})
export const memberRegister = body => axios.post(`${SERVER}api/member/register`, {headers, body})
export const memberRetrieve = id => axios.get(`${SERVER}adm/member/retrieve/${id}`)

export const postWrite = body => axios.post(`${SERVER}api/post/register`, {headers: headers_xml, body})
export const postList = () => axios.get(`${SERVER}api/post/list`, headers)


// {headers, body} == {headers: headers, body: body}