import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../../../src/auth/index.js";
import {MemoryRouter, useNavigate} from "react-router-dom";
import {Navbar} from "../../../src/ui/index.js";

//hacer mocks de librerias completas
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}))

describe('Pruebas en Navbar',()=>{

    const contextValue = {
        loggedIn: true,
        user:{
            name:'Antony',
            id: 'ABC'
        },
        logout: jest.fn()
    }

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('debe de mostrar el nombre del usuario en el componente',()=>{

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText(contextValue.user.name)).toBeTruthy()
    })

    test('debe de llamar el logout y navigate cuando se hace click en el boton logout',()=>{
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login',{replace: true})
    })
})