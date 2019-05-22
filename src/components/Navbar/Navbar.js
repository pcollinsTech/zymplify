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
              <NavItem>
                <NavLink href="/blog" className="nav-link">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="nav-link">Contact</NavLink>
              </NavItem>
              <Button color="secondary"><a href="https://zymplify.com/register.php" target="__blank" className="button-link">Try for Free</a></Button>
              <Button color="info"><a href="https://zymplify.com/client-area/" target="__blank" className="button-link">Login</a></Button>
            </Nav>
          </Collapse>
        </div>
        </Navbar>
        <style jsx="true">{`
          .btn {
            margin: 0 7px;
            border-radius: 10px;
          }
          .btn a{
            color: white;
            
          }
          .nav-link{
            text-decoration: none;
            color:black
          }
        `}</style>
      </React.Fragment>
    );
  }
}