import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../auth";
import {HeroesRoutes} from "../heroes/index.js";


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />

                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    );
};
