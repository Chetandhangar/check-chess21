import {handleFetchUser} from '../../features/user/userSlice'
export const API_ENPOINT = "https://check-chess21.chetandhangar.repl.co";

export const SetLocalStorage = ({token,user,}) => {
    localStorage?.setItem("login" , JSON.stringify({token, 
        loginuser : user,
        username : user.username,
        id : user._id}))
}

export const setUser =  async(dispatch,setToken) => {
    const login = JSON.parse(localStorage?.getItem("login"))

    login?.token && login?.username  && 
    (await dispatch(handleFetchUser({
        username : login?.username,
        token : login?.token
    })
    ))

    login?.token && dispatch(setToken({token : login.token}))
}

export const checkFollow = (arr,userId) => {
    return arr.find((userFollowd) => userFollowd._id === userId) ? true : false
}


export const checkLikes = (arr, tweetId) => {
    return arr.find((userLikedTweet) => userLikedTweet._id === tweetId)
       ? true
       : false;
 };
 

export const checkBookmarks = (arr, tweetId) => {
    return arr.find((userBookMarked) => userBookMarked._id === tweetId)
       ? true
       : false;
 };