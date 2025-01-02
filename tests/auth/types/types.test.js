import {types} from "../../../src/auth/types/types.js";

describe('Pruebas en Types',()=>{
    test('debe de regresar estos types',()=>{
        expect(types).toEqual({
            login: '[Auth] Login',
            logout:'[Auth] Logout',
        });
    })
})