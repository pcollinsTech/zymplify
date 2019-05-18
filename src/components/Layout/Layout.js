
import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar"
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div>
      <main>{children}</main>
    </div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
