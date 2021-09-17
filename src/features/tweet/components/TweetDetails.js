import React from 'react';
import {Link} from 'react-router-dom';
import {} from '../../../common/utils/utils';
import {Button} from 'reactstrap';

export const TweetDetails = ({tweet}) => {

    const formatDate = (ISOString) => {
        const date = new Date(ISOString).toUTCString().substring(4, 16);
        return date;
     };

    return(
        <div className="container">
            <div className="card">
                <div className="row">
                    <div className="col">
                        <Link to={`/profile/${tweet?.user?.username}`}>
                            <img 
                            style={{height: 30, width : 30, cursor : "pointer"}}
                                className="rounded-circle rounded-sm inline-block" 
                                src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                                alt="profile"
                                />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/profile/${tweet?.user?.username}`}
                        className="bg-light text-dark"
                        >
                        <span>{tweet?.user?.firstName}{" "}{tweet?.user?.lastName}</span>
                        </Link>
                       
                    </div>
                    <div className="col">
                    <Link to={`/profile/${tweet?.user?.username}`}
                        className="bg-light text-dark"
                        >
                        <span className="card-subtitle">@{tweet?.user?.username}</span>
                        </Link>
                    </div>
                    <div className="col">
                        .{formatDate(tweet?.createdAt)}
                    </div>
                </div>
                <div className="text-center"
                style={{paddingTop : "2rem"}}>
                    <p>{tweet?.tweet}</p>
                </div>
                <div className="text-center">
                    <div className="text-center">
                    <Button>
                    <span
                    className="fa fa-heart fa-sm"
                    aria-hidden="true"
                    ></span>
                    </Button>
                    <Button  aria-hidden="true"><span
                    className="fa fa-bookmark" aria-hidden="true"
                   ></span>
                    </Button>
                    </div>
               
                    
                </div>
            </div>
        </div>
    )
}