import axios from 'axios'

const backendAPI = 'http://127.0.0.1:8000/api/'

const signUp = (user) => ({
  type: "SIGN_UP",
  payload: user
})

const thunkedSignUp = (userObj) =>     
  dispatch =>                 
    axios.post(`${backendAPI}customers/`, userObj) 
    .then(res => res.data)
    .then(user => {
      dispatch(signUp(user))
    })

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
  thunkedSignUp,
  logIn,
  logOut,
  unsubscribe
}