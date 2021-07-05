import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type': 'application/json'}
const headers_xml = {'Content-Type': 'application/xml'}

export const memberDetail = id => axios.get(`${SERVER}api/member/detail/${id}`)
export const memberDelete = body => axios.put(`${SERVER}api/member/delete`, {headers, body})
// 본래는 delete여야 하나 delete에서 get이 안 먹어서 안 됨
export const memberList = () => axios.get(`${SERVER}adm/member/list`, headers)
export const memberLogin = body => axios.post(`${SERVER}api/member/login`, {headers, body})
export const memberModify = body => axios.put(`${SERVER}api/member/modify`, {headers, body})
export const memberRegister = body => axios.post(`${SERVER}api/member/register`, {headers, body})
export const memberRetrieve = name => axios.get(`${SERVER}adm/member/retrieve/${name}`)
// 본래는 get이어야 하나 delete에서 get이 안 먹어서 안 됨

export const postWrite = body => axios.post(`${SERVER}api/post/register`, {headers: headers_xml, body})
export const postList = () => axios.get(`${SERVER}api/post/list`, headers)


// {headers, body} == {headers: headers, body: body}