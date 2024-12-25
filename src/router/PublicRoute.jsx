import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({children}) => {
    const {loggedIn} = useContext(AuthContext);
    return (!loggedIn)
        ? children
        : <Navigate to='/' />
};
