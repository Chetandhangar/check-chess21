import React from 'react';
import {RenderNav} from '../../../common/Nav/Navbar'
export const Feed = () =>{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <RenderNav />
                    </div>
                    <div className="col-md">
                        Feed Page
                    </div>
                </div>
              
         
            </div>
        )
}