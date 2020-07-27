import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types";

const initialState = {
    user = {}
}

const login = (state = initialState, action) => {
  switch (action.type) {
    // case "DELETE_LEAD":
    //     return {
    //         ...state,
    //         leads: state.leads.filter(lead => lead.id !== action.payload)
    //     }
    // case "ADD_LEAD":
    //     return {
    //         ...state,
    //         leads: [...state.leads, action.payload]
    //     }
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case "LOG_IN":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    case "UNSUBSCRIBE":
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default login;
