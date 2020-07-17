const login = (state = {}, action) => {
    switch(action.type){
        case "SIGN_UP":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_IN":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        case "UNSUBSCRIBE":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
}

export default login;