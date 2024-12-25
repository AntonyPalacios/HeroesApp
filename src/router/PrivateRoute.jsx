import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate, useLocation} from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {loggedIn} = useContext(AuthContext);

    const {pathname, search} = useLocation()
    const lastPathname = pathname.concat(search);
    localStorage.setItem('lastPathname', lastPathname);

    return (loggedIn)
        ?children
        :<Navigate to='/login'/>
};
