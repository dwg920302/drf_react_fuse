import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'

export const userSignup = signupRequest => axios.get(`${SERVER}member/signup`, signupRequest)

// 임시조치. 나중에 post로 바꿔줘야 함.