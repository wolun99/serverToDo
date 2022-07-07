import axios from 'axios'
const url = 'http://localhost:3000/'

function registerUser(userData) {
  return axios.post(url + 'sign', userData)
}

function LoginUser(loginData) {
  return axios.post(url + 'login', loginData)
}

function addPost(postsData) {
  return axios.post(url + 'post', postsData)
}
export { registerUser, LoginUser, addPost }
