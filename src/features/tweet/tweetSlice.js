import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_ENPOINT} from '../../common/utils/utils';

export const initalstate = {

    tweetPost : {},
    tweetPostStatus :"idle",

    tweets  : null,
    tweetsStatus : "idle",
    tweetsError : "",

    tweetsLiked: {},
    tweetLikedStatus: 'idle',
    tweetLikedError: '',

    tweetsBookmarked: {},
    tweetBookmarkStatus: 'idle',
    tweetBookmarkError: '',
}

export const handlePostTweet = createAsyncThunk(
    'tweet/handlePostTweet',
    async ({tweet,token}) => {
        try{
            const response = await axios.post(`${API_ENPOINT}/api/tweet`, 
             {tweet:tweet},
            {headers : {authorization : token}})
            console.log(response,'from post tweet');
            return response.data;
        }catch(error){
            console.log(error)
        }
    }
)

export const handleFetchFeed = createAsyncThunk(
    'tweet/handleFetchFeed',
    async({token}) => {
        try{
            const response = await axios.get(`${API_ENPOINT}/api/feed`,
            {headers : {authorization : token}})
            
            console.log(response,'from fetch tweets');
            return response.data;

        }catch(error){
            console.log(error)
        }
    } 
) 
export const handleToggleLikeSubmit = createAsyncThunk(
    'tweet/handleToggleLikeSubmit',
    async({id, token}) => {
            try{
                const response = await axios.get(`${API_ENPOINT}/api/tweet/${id}/togglelike`,
                {headers : {authorization : token}})
                console.log(response,'from tweet toggle');
                return response.data;
            }catch(error){
                console.log(error);

            }
    }
)

export const handleToggleBookMark = createAsyncThunk(
    'tweet/handleToggleBookMark',
    async({id,token}) => {
        try{
            const response = await axios.get(`${API_ENPOINT}/api/tweet/${id}/togglebookmark`,{
                headers : {authorization : token}
            })
            console.log(response,'from toggle bookmarked')
            return response.data;

        }catch(error){
            console.log(error)
        }
    }
)

const tweetSlice = createSlice({
    name  : "tweet",
    initialState : initalstate,
    reducers : {},
    extraReducers : {
        [handlePostTweet.pending] : (state) => {
          state.tweetPostStatus = "loading"
        },
        [handlePostTweet.fulfilled] : (state,action) => {
            state.tweetPostStatus = "success";
        },
        [handlePostTweet.rejected] : (state) => {
            state.tweetPostStatus = "error"
        },
        [handleFetchFeed.pending] : (state,action) => {
            state.tweetsStatus = "loading"
        },
        [handleFetchFeed.fulfilled] : (state,action) => {
            state.tweetsStatus = "success";
            state.tweets = action.payload.tweets
        },
        [handleFetchFeed.rejected] : (state) => {
            state.tweetsStatus = "error";
            state.tweetsError = "Error occure while fetching the tweets"
        },
        [handleToggleLikeSubmit.pending] : (state) => {
            state.tweetLikedStatus = "loading";
        },
        [handleToggleLikeSubmit.fulfilled] : (state,action) => {
            state.tweetLikedStatus = "success";
            state.tweetsLiked = action.payload.likes
        }, 
        [handleToggleLikeSubmit.rejected]  :(state,action) => {
            state.tweetLikedStatus = "error";

        },

        [handleToggleBookMark.pending]: (state, action) => {
            state.tweetBookmarkStatus = 'loading';
         },
         [handleToggleBookMark.fulfilled]: (state, action) => {
            state.tweetsBookmarked = action.payload.bookmarks;
            state.tweetBookmarkStatus = 'success';
         },
         [handleToggleBookMark.rejected]: (state, action) => {
            state.tweetBookmarkError = "Error while toggle bookmark";
            state.tweetBookmarkStatus = 'error';
         },

    }
})

export default tweetSlice.reducer;