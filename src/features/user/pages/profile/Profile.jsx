import React from 'react';
import {RenderNav} from '../../../../common/Nav/Navbar'
import {ProfileCard} from '../../components/Profile/ProfileCard'

export const Profile = () =>{  
    return( 
         <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <RenderNav />
                </div>
               <div className="col-md">
                   <ProfileCard />
               </div>
            </div>
         </div>
        )
}