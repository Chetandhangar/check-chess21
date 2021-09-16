export const ProfileHeader = ({user}) => {
    console.log(user,'from header')
    return(
        <div className="container">
            <div className="card">
               <div>
               <h5>
                   <span>{user?.firstName}</span> {"  "}
                   <span>{user?.lastName}</span>
               </h5>
               </div>
                <div>
                    <h5>{user?.tweetsCount} Tweets</h5>
                </div>

            </div>
        
        </div>
    )
}