import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {authReducer} from "./authReducer.js";


const initialState = {
    loggedIn: false,
}

export const AuthProvider = ({children}) => {

    const [state,dispatch] = useReducer(authReducer,initialState);
    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};
