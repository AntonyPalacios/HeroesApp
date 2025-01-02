/*
* Tarea
*
* debe de retornar el estado por defecto
* debe de (login) llamar el login autenticar y establecer el user
* debe de (logout) borrar el name del usuario y logged en false
*
* */

import {authReducer} from "../../../src/auth/index.js";
import {types} from "../../../src/auth/types/types.js";

describe('Pruebas en authReducer', () => {

    const initialState = {
        loggedIn: false,
        user: null
    }

    const user = {
        name: "Test",
        id: '123'
    }

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer(initialState,{})
        expect(state).toEqual(initialState)
    })

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: user
        }

        const state = authReducer(initialState,action)
        expect(state).toEqual({
            loggedIn: true,
            user: action.payload,
        })
    })

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }

        const state = authReducer(initialState,action)
        expect(state).toEqual({
            loggedIn: false,
            user: null
        })
    })

})