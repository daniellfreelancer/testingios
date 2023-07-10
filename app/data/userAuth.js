import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        logged: false,
        profilePhoto: null
    },
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload
            state.logged = true
        },
        deleteCredentials: (state, action) => {
            state.user = null
            state.logged = false
            state.profilePhoto = null
        },
        setPhotoState : (state, action) => {
            state.profilePhoto = action.payload
        }
    }
})

export const { setCredentials, deleteCredentials, setPhotoState } = userSlice.actions
export default userSlice.reducer