import {createAsyncThunk, createAction, createSlice} from '@reduxjs/toolkit';

const intialstate = {
    token : null,

    currentUser = null,
    currentUserStatus = "idle",

    signUpStatus = "idle",
    signUpError = '',

    logInStatus = "idle",
    logInError = '',

    users: [],
    usersStatus: 'idle',
 
    userProfile: null,
    userProfileStatus: 'idle',
 
    userFollowStatus: 'idle',
    userUnfollowStatus: 'idle',
 
    userProfileEditStatus: 'idle',
}

const userSlice = createSlice({
    name : "user",
    initialState : intialstate,
    reducers : {
        setToken(state , action) {
            state.token = action.payload.token
        }
    }
})