
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./layout.css";


export const ThemeContext = React.createContext(null);

class Layout extends Component {
  

  render() {

    return (
      <div>
        <Navbar 
          // path={this.props.location.pathname}
        />
        <div>
          <main>{this.props.children}</main>
        </div>
        <Footer/>
      </div>
    );
  };
};


export default Layout;