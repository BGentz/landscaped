import axios from 'axios'

const backendAPI = 'http://127.0.0.1:8000/api/'

const signUp = (userObj) => async () =>  {
  const apiData = await axios.post(`${backendAPI}`, userObj)
    .then(response => console.log(response))
  return {
  type: "SIGN_UP",
  payload: userObj
}}

const logIn = (userObj) => ({
  type: "LOG_IN",
  payload: userObj
})

const logOut = () => ({
  type: "LOG_OUT"
})

const unsubscribe = (userObj) => ({
  type: "UNSUBSCRIBE",
  payload: userObj
})

export default {
  signUp,
  logIn,
  logOut,
  unsubscribe
}