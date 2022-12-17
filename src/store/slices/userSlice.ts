import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    isLogged: boolean,
    id: number | string,
    username: string,
    password: string,
    surname: string,
    sex: number | string | null,
    age: number | string | null,
    description: string
}

const initialState: User = {
    isLogged: false,
    id: Math.round(Math.random() * 1000),
    username: '',
    password: '',
    surname: '',
    sex:  null,
    age:  null,
    description: '',
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
})

export const {} = UserSlice.actions;
export default UserSlice.reducer;