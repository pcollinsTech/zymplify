import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './navbar.css';
import logo from '../../images/logo.png'

const navlink = {
  color: 'white',
  fontFamily: 'sans-serif'
}


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" style={{ 
          backgroundColor: '#61AAA4',
      }}>
        <div className="container">
        
          <div className="row">
          
          </div>
          <NavbarBrand href="/"><img src={logo} className="logo" alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about" style={navlink}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services" style={navlink}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#clients" style={navlink}>Our Clients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/newsandviews" style={navlink}>News And Views</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" style={navlink}>Contact</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </div>
        </Navbar>
      </div>
    );
  }
}