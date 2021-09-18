import React from 'react';
import {Link} from 'react-router-dom'

export const BookMarkHeader = () =>{
    return(
        <div className="container">
            <div className="card">
                <div className="shadow p-1 mb-3 bg-white rounded">
                    <Link 
                    to={`/feed`}
                    ><span className="fa fa-arrow-left"></span></Link>
                    <p className="font-weight-bolder">Bookmark</p>
                </div>
            </div>
        </div>
        
    )
}