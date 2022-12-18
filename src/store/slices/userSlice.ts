import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    isLogged: boolean,
    id: number | string | null,
    username: string,
}

const initialState: User = {
    isLogged: false,
    id: Math.round(Math.random() * 1000),
    username: '',
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoggedIn(state, action) {
            state.isLogged = true;
            state.username = action.payload;
        },
        userLogOut(state, action) {
            state.isLogged = false;
            state.id = null;
            state.username = '';
        }
    },
})

export const {userLoggedIn, userLogOut} = UserSlice.actions;
export default UserSlice.reducer;