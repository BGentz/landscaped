import React from 'react'
import { useDispatch, useSelector } from "react-redux";
// Actions
// import { simpleAction } from './actions/simpleAction';
// Pages
// import Home from './pages/Home'

const simpleAction = () => ({ type: 'SIMPLE_ACTION' })

export const App = () => {
  const result = useSelector(
    state => state.result
    );
  const dispatch = useDispatch();


  return (
    <div>
      <pre>
        { result }
        </pre>
      <button onClick={() => dispatch(simpleAction())}>Test redux action</button>
    </div>
  )
}

export default App();