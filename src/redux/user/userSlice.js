import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    hiddenMenu: true,
    newUser: {
        id: 1,
        dni: '',
        nombre: '',
        nacimiento: '',
        telefono: '',
        email: '',
        clave: '',
        equipoFav: ''
    }
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload,
            };
        },
        toggleHiddenMenu: (state) => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            };
        },
        setNewUser: (state, action) => {
            return {
                ...state,
                newUser: action.payload,
            };
        },
        setNewUserPassword: (state, action) => {
            state.newUser.clave = action.payload;
        },
        setNewUserTeamFavorite: (state, action) => {
            state.newUser.equipoFav = action.payload;
        },
    },
});

export const { setCurrentUser, toggleHiddenMenu, setNewUser, setNewUserPassword, setNewUserTeamFavorite} = userSlice.actions;

export default userSlice.reducer;