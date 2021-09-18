import React from 'react';
import {RenderNav} from '../../../../common/Nav/Navbar';
import {BookMarkTimeLine} from '.././../components/BookMark/BookMarkTimeLine'

export const BookMark = () => {
    return(
       <div className="container">
        <div className="row">
            <div className="col-md-3">
                    <RenderNav />
            </div>
            <div className="col-md">
                <BookMarkTimeLine />
            </div>
        </div>
    </div>
    )
}