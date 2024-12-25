import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate} from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {loggedIn} = useContext(AuthContext);
    return (loggedIn)
        ?children
        :<Navigate to='/login'/>
};
