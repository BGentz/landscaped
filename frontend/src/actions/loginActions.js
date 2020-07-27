import axios from "axios"
import { SIGN_UP, LOGIN, LOG_OUT, UNSUBSCRIBE } from "./types"

const backendAPI = "http://127.0.0.1:8000/api/"

export const getLeads = () => dispatch => {
  axios
    .get("/api/leads")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      })
    })
    .catch(err => console.log(err))
}

export const deleteLead = id => dispatch => {
  axios
    .get(`/api/leads/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_LEADS,
        payload: id,
      })
    })
    .catch(err => console.log(err))
}

export const addLead = lead => dispatch => {
  axios
    .post(`/api/leads/`, lead)
    .then(res => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      })
    })
    .catch(err => console.log(err))
}

/*
Action:  Sends user information to backened to be added to the Customer Database
userObj: ['first_name',
          'last_name',
          'email',
          'phone_number',
          'password',
          'address_1',
          'address_2',
          'city',
          'state',
          'zip_code']
Dispatch: userObj
*/
export const signUpCustomer = userObj => dispatch => {
  axios
    .post(`${backendAPI}customers/`, userObj)
    .then(res => {
      dispatch({
        type: "SIGN_UP",
        payload: userObj,
      })
    })
    .catch(err => console.log(err))
}

/*
Action:  Sends user information to backened to authenticate users credentials to log them in
userObj: ['email',
          'password']
Dispatch: **User Information from backend, not just the object submitted
*/
const logIn = userObj => ({
  type: "LOGIN",
  payload: userObj,
})

/*
Action:  Empties the userObject that is currently in state
Dispatch: 
*/
const logOut = () => ({
  type: "LOG_OUT",
})

/*
Action:  Removes PII from user, keeps (?) age, city, state, zip
userObj: 
Dispatch: 
*/
const unsubscribe = userObj => ({
  type: "UNSUBSCRIBE",
  payload: userObj,
})

export default {
  signUp,
  logIn,
  logOut,
  unsubscribe,
}
