import React , {useState} from 'react';
import {Navbar,NavItem,Collapse,NavbarBrand, Nav,NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom'
export const Header = () => {
    const [isNavOpen , setNavOpen] = useState(false);
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
                        <NavItem>
                        <Link className="nav-link" to='/feed' style={{cursor : "pointer"}}>
                              <span className="fa fa-home fa-lg"></span></Link>
                        </NavItem>
                        <NavItem>
                        <Link className="nav-link" to='/profile' style={{cursor : "pointer"}}>
                              <span className="fa fa-user fa-lg"></span>Profile</Link>
                        </NavItem>
                        <NavItem>
                        <Link className="nav-link" to='/login' style={{cursor : "pointer"}}>
                             <span className="fa fa-sign-in fa-lg">Login</span></Link>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>

            </Navbar>
            
        </React.Fragment>
    )
}