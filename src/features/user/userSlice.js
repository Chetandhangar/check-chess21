import {createAsyncThunk,createSlice , createAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_ENPOINT,SetLocalStorage} from '../../common/utils/utils'

const intialstate = {
    token : null,

    currentUser : null,
    currentUserStatus : "idle",

    signUpStatus : "idle",
    signUpError : '',

    logInStatus :"idle",
    logInError : '',

    users: [],
    usersStatus: 'idle',
 
    userProfile: null,
    userProfileStatus: 'idle',
 
    userFollowStatus: 'idle',
    userUnfollowStatus: 'idle',
 
    userProfileEditStatus: 'idle',
}

export const handleUserSignUp = createAsyncThunk(
    'user/hadleUserSignup',
    async (user) => {
        console.log(user,'from signup status')
        try{
            const response  = await axios.post(`${API_ENPOINT}/api/signup`,{
               firstName : user.firstName,
               lastName : user.lastName,
               username : user.username,
               password : user.password,
               email : user.email
            })
            console.log(response)
            return response.data
        }catch(error){
            console.log(error);
        }
    }
)

export const handleLogOutUser = createAction('/user/handleLogOutUser');



export const handleLoginUser = createAsyncThunk(
    'user/handleLoginUser',
    async(user) => {
        try{
            const response = await axios.post(`${API_ENPOINT}/api/login`, {
                email : user?.email,
                password : user?.password
            })
            console.log(response,'login response from server')
            return response.data;
        }catch(error) {
            console.log(error)
        }
    }
)




const userSlice = createSlice({
    name : "user",
    initialState : intialstate,
    reducers : {
        setToken(state , action) {
            state.token = action.payload.token
        }
    },
    extraReducers : {
        [handleUserSignUp.pending] :(state,action) => {
                state.signUpStatus = "loading"
        },
        [handleUserSignUp.fulfilled] : (state, action) => {
                state.signUpStatus = "signupSuccess"
        },
        [handleUserSignUp.rejected] : (state,action) => {
            state.signUpStatus = 'error'
            
        },
        [handleLoginUser.pending] : (state,action) => {
            state.logInStatus = "loading"
        },
        [handleLoginUser.fulfilled] : (state,action) => {
            state.logInStatus = "loginSuccess";
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
            SetLocalStorage(action.payload);
            state.logInError = ''
        },
        [handleLoginUser.rejected] : (state,action) => {
            state.logInStatus = "error"
            state.logInError = "Error while login"
        },
        [handleLogOutUser] : (state,action) => {
            console.log("logout called")
            state.token = null
            state.currentUser = null;
            state.currentUserStatus = 'idle';
            state.signUpStatus = 'idle';
            state.logInStatus = 'idle';
            state.users = [];
            state.usersStatus = "idle";
            state.userProfile = null;
            state.userProfileStatus = "idle";
            state.userUnfollowStatus = "idle";
            state.userFollowStatus = "idle";
            state.userProfileEditStatus = "idle";
            localStorage?.removeItem("login");

        }
    }
})

export const {setToken} = userSlice.actions

export default userSlice.reducer;