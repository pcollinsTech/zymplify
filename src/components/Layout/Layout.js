
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./layout.css";
import { getScreenWidth } from "../../utils/helpers";

import themeObjectFromYaml from "../../theme/theme.yaml";

export const ThemeContext = React.createContext(null);

class Layout extends Component {
  

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
  }
  render() {

    return (
      <ThemeContext.Provider value={themeObjectFromYaml}>
        <Navbar 
          // path={this.props.location.pathname}
          theme={themeObjectFromYaml} 
        />
        <div>
          <main>{this.props.children}</main>
        </div>
        <Footer theme={themeObjectFromYaml}/>
      </ThemeContext.Provider>
    );
  };
};


export default Layout;