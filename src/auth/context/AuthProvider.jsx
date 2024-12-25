import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {authReducer} from "./authReducer.js";
import {types} from "../types/types.js";


const initialState = {
    loggedIn: false,
}

//funcion de inicializacion
const init = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        loggedIn: !!user,
        user
    }
}
export const AuthProvider = ({children}) => {

    const [authState,dispatch] = useReducer(authReducer,initialState, init);
    const login = (name='') =>{
        const user = {
            id:1,
            name
        }
        const action = {type: types.login, payload: user}
        localStorage.setItem('user',JSON.stringify(user))
        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = {type: types.logout}
        dispatch(action)
    }
    return (
        <AuthContext.Provider value={{...authState,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};
