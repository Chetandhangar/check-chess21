export const API_ENPOINT = "https://young-coast-47064.herokuapp.com";

export const SetLocalStorage = ({token,user,}) => {
    localStorage?.setItem("login" , JSON.stringify({token, 
        loginuser : user,
        username : user.username,
        id : user._id}))
}

export const setUser =  (dispatch,setToken) => {
    const login = JSON.parse(localStorage?.getItem("login"))
    console.log("set user is called for token", login)
    login?.token && dispatch(setToken({token : login.token}))
}