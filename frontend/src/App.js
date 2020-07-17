import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Actions
import allActions from './actions'
// Components
import NavigationBar from './components/NavigationBar'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
// Pages


const App = () => {
  // const counter = useSelector(state => state.counter)
  // const currentUser = useSelector(state => state.currentUser)

  // const dispatch = useDispatch()

  // const user = {name: "Rei"}

  // useEffect(() => {
  //   dispatch(allActions.userActions.setUser(user))
  // }, [])

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <h1>This is my home page!</h1>
        <SignUp />  
        <Login />
        {/* {
          currentUser.loggedIn ? 
          <>
            <h1>Hello, {currentUser.user.name}</h1>
            <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
          </> 
          : 
          <>
            <h1>Login</h1>
            <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as Rei</button>
          </>
          }
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
        <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button> */}
      </div>
    </Router>

  );
}

export default App;