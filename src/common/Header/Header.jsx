import React , {useState} from 'react';
import {Navbar,NavItem,Collapse,NavbarBrand, Nav,NavbarToggler,Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {  handleLogOutUser } from '../../features/user/userSlice'

export const Header = () => {
    const [isNavOpen , setNavOpen] = useState(false);
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.user)
    function toggleNav(){
        setNavOpen(isNavOpen => isNavOpen = !isNavOpen)
      }

    return(
        <React.Fragment>
            <Navbar dark color="primary" expand="md">
                <div className="container">
                <NavbarToggler onClick={toggleNav}></NavbarToggler>
                    <NavbarBrand>Check</NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                        {token ? 
                        <NavItem>
                            <Button onClick={() => dispatch(handleLogOutUser())}>
                             <span className="fa fa-sign-out fa-lg">Logout</span>
                             </Button>
                        </NavItem> :
                         <NavItem>
                             <Link className="nav-link" to='/login' style={{cursor : "pointer"}}>
                             <span className="fa fa-sign-in fa-lg">Login</span></Link>
                        </NavItem>}
                        </Nav>
                    </Collapse>
                </div>

            </Navbar>
            
        </React.Fragment>
    )
}