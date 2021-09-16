import {createAsyncThunk,createSlice , createAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_ENPOINT,SetLocalStorage} from '../../common/utils/utils'

const intialstate = {
    token : null,

    currentUser :null,
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

export const handleFetchUser = createAsyncThunk(
    'user/handleFetchUser' ,
    async({username , token}) => {
            try{
                const response  = await axios.get(`${API_ENPOINT}/api/user/${username}`,{
                    headers : {authorization : token}
                })
                console.log(response,'from fetch user server')
                return response?.data;

            }catch(error){
                console.log(error)
            }
    }
)
export const handleFetchUsers = createAsyncThunk(
    'user/handleFetchUsers',
    async({token}) => {
        try{
            const response = await axios.get(`${API_ENPOINT}/api/users`,{
                headers : {authorization : token}
            })
            console.log(response , 'from fetch users')
            return response?.data;
        }catch(error){
            console.log(error);
        }
    }
)


export const handleFetchUserProfile = createAsyncThunk(
    'user/handleFetchUserProfile' ,
    async({username,token}) => {
        try{
            const response = await axios.get(`${API_ENPOINT}/api/user/${username}`, {
                headers : {authorization : token}
            })
            return response?.data
        }catch(error){
            console.log(error)
        }
      
    }
)

export const handleFollow = createAsyncThunk(
    '/user/handleFollow',
    async({id,token}) => {
        try{
            const response = await axios.get(`${API_ENPOINT}/api/user/${id}/follow`,{
                headers : {authorization : token}
            })
            console.log(response)
            return response.data;
        }catch(error){
            console.log(error)
        }
        
    }
)
export const handleUnFollow = createAsyncThunk(
    '/user/handleFollow',
    async({id,token}) => {
        try{
            const response = await axios.get(`${API_ENPOINT}/api/user/${id}/unfollow`,{
                headers : {authorization : token}
            })
            console.log(response)
            return response.data;
        }catch(error){
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
        },

        [handleFetchUser.fulfilled] : (state,action) => {
            state.currentUser = action.payload.user;
            state.currentUserStatus = "success"
        },
        [handleFetchUserProfile.pending] : (state) => {
            state.userProfileStatus = "loading"
        },
        [handleFetchUserProfile.fulfilled] : (state,action) => {
            state.userProfile = action.payload.user;
            state.userProfileStatus = "success";
        },
        [handleFetchUserProfile.rejected] : (state) => {
            state.userProfileStatus = 'error'
        },
        [handleFetchUsers.pending] : (state,action) => {
            state.usersStatus = "loading"
        },
        [handleFetchUsers.fulfilled] : (state,action) => {
            state.users = action.payload.users;
            state.usersStatus = "success"
        },
        [handleFetchUsers.rejected] : (state,action) => {
            state.usersStatus = "error"
        },
        [handleFollow.pending] : (state,action) => {
            state.userFollowStatus = "loading"
        },
        [handleFollow.fulfilled] : (state,action) => {
            state.userFollowStatus = "success";
           
        },
        [handleFollow.rejected] : (state) => {
            state.userFollowStatus = "error"
        },
        [handleUnFollow.pending] : (state,action) => {
            state.userFollowStatus = "loading"
        },
        [handleUnFollow.fulfilled] : (state,action) => {
            state.userFollowStatus = "success";
          
        },
        [handleUnFollow.rejected] : (state) => {
            state.userFollowStatus = "error"
        }
    }
})

export const {setToken} = userSlice.actions

export default userSlice.reducer;