import React from 'react';
import {Nav,NavItem,} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {handleFetchUserProfile} from '../../features/user/userSlice';

export const RenderNav = () => {
    const dispatch = useDispatch();
    const {token,currentUser : {username}} = useSelector((state) => state.user);
    return(
        <React.Fragment>
               <Nav navbar>
                        <NavItem>
                        <Link className="nav-link" to='/feed' style={{cursor : "pointer"}}>
                              <span className="fa fa-home fa-lg"></span>Home</Link>
                        </NavItem>
                        <NavItem>
                        <Link className="nav-link" to='/explore' style={{cursor : "pointer"}}>
                              <span className="fa fa-hashtag fa-lg">Explore</span></Link>
                        </NavItem>
                        <NavItem>
                        <Link className="nav-link" to='/bookmark' style={{cursor : "pointer"}}>
                              <span className="fa fa-bookmark fa-lg">Bookmarks</span></Link>
                        </NavItem>
                        <NavItem>
                        <Link  className="nav-link" to={`/profile/${username}`} style={{cursor : "pointer"}}
                         onClick={() => dispatch(handleFetchUserProfile({
                            username:username,
                            token
                        }))}
                        >
                       <span className="fa fa-user fa-lg"></span>Profile</Link>
                        </NavItem>

                      
                   
                    </Nav>
        </React.Fragment>
    )
}