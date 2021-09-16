import React from 'react';
import {RenderNav} from '../../../common/Nav/Navbar';
import {TimeLineFeed} from '../components/TimeLineFeed'

export const Feed = () =>{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <RenderNav />
                    </div>
                    <div className="col-md">
                        <TimeLineFeed />
                    </div>
                </div>
              
         
            </div>
        )
}