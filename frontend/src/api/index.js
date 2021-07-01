import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type': 'application/json'}
const headers_xml = {'Content-Type': 'application/xml'}

export const memberRegister = body => axios.post(`${SERVER}api/member/register`, {headers, body})
export const memberLogin = body => axios.post(`${SERVER}api/member/login`, {headers, body})
export const memberList = () => axios.get(`${SERVER}adm/member/list`, headers)

export const postWrite = body => axios.post(`${SERVER}api/post/register`, {headers: headers_xml, body})
export const postList = () => axios.get(`${SERVER}api/post/list`, headers)


// {headers, body} == {headers: headers, body: body}