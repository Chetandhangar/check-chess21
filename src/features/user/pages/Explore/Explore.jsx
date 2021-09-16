import React from 'react' ;
import {RenderNav} from '../../../../common/Nav/Navbar';
import {ExploreTimeLine} from '../../components/Explore/ExploreTimeLine'


export  const Explore = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                        <RenderNav />
                </div>
                <div className="col-md">
                    <ExploreTimeLine />
                </div>
            </div>
        </div>
    )
}