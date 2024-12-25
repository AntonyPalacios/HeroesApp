import {types} from "../types/types.js";


export const authReducer = (state={}, action) => {
    switch(action.type) {
        case types.login:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
            }
        case types.logout:
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        default:
            return state;
    }
}