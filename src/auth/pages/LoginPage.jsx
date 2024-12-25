import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/index.js";

export const LoginPage = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const onLogin = () => {
        login('Antony Palacios');
        navigate("/",{
            replace: true,
        });
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    );
};
