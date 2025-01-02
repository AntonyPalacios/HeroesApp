import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {PublicRoute} from "../../src/router/PublicRoute.jsx";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('Pruebas en Public Route', () => {

    test('debe de mostrar el children si no esta autenticado', () => {
        const contextValue = {
            loggedIn: false
        }
        //no es trabajo de este componente verificar lo que hay dentro,
        //tan solo proteger su contenido
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PublicRoute>
                        <h1>Ruta publica</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    })

    test('debe navegar si esta autenticado', () => {
        const contextValue = {
            loggedIn: true,
            user: {
                name: 'John',
                id: '123'
            }
        }
        //no es trabajo de este componente verificar lo que hay dentro,
        //tan solo proteger su contenido
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Marvel</h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Marvel')).toBeTruthy();
    })


})