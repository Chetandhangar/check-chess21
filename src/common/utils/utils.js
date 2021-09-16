export const API_ENPOINT = "https://young-coast-47064.herokuapp.com";

export const SetLocalStorage = ({token,user,}) => {
    localStorage?.setItem("login" , JSON.stringify({token, 
        loginuser : user,
        username : user.username,
        id : user._id}))
}