import {types} from "../types/types.js";


export const authReducer = (state={}, action) => {
    switch(action.type) {
        case types.login:
            return {
                ...state,
                loggedIn: true,
                name: action.payload,
            }
        case types.logout:
            return {
                ...state,
                loggedIn: false,
            }
        default:
            return state;
    }
}