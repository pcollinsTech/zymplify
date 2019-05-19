import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

import logo from '../../images/logo.png'

const navlink = {
  color: 'black',
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
      <React.Fragment>
        <Navbar 
        className="fixed-top"
        expand="md" 
        style={{ backgroundColor: 'white'}}>
        <div className="container">
        
          <div className="row">
          
          </div>
          <NavbarBrand href="/"><img src={logo} className="logo" alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about" className="nav-link">About</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#services" className="nav-link">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#clients" className="nav-link">Our Clients</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/blog" className="nav-link">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="nav-link">Contact</NavLink>
              </NavItem>
              <Button color="secondary">Try for Free</Button>
              <Button color="info">Login</Button>
            </Nav>
          </Collapse>
        </div>
        </Navbar>
        <style jsx>{`
          
          .nav-link{
            color:black
          }
        `}</style>
      </React.Fragment>
    );
  }
}