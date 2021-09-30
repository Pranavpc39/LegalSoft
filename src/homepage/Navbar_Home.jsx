import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Navbar_Home.css';

const Navbar_Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand className="nav-links" href="/" style = {{padding: '10px', color: 'black', fontSize: '20px', fontWeight: 'bold'}}>LegalSoft</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink className="nav-links" to = '/' style = {{color: 'black', fontSize: '20px'}}>Docs</NavLink>
            </NavItem>
            <NavItem >
              <Link to = '/login' style = {{textDecorationLine: 'none'}}>
              <NavLink className="nav-links"  style = {{color: 'black', fontSize: '20px'}}>Login</NavLink>
              </Link>
            </NavItem>
            <NavItem >
              <NavLink className="nav-links" to="/" style = {{color: 'black', fontSize: '20px'}}>About Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar_Home;