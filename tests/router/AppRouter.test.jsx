import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../src/router/AppRouter.jsx";

describe('Pruebas en AppRouter', () => {

    test('debe de mostrar el login si no está autenticado',()=>{

        const contextValue = {
            loggedIn: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getAllByText('Login').length).toBe(2);

    })

    test('debe de mostrar el componente de Marvel si está autenticado',()=>{

        const contextValue = {
            loggedIn: true,
            user:{
                name:'Marvel',
                id: 'ABC'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByRole('heading',{level:1}).innerHTML).toBe('Marvel Page');

    })

})