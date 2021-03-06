import React from 'react'
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import WhiteLogo from './images/WhiteLogo'
import London from './images/London'
import Boston from './images/Boston'
import Titanic from './images/Titanic'
import Promenade from './images/Promenade'

export default () => {

  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="row mx-auto font-grey">
            <div className="container mt-5">

            <WhiteLogo/>
            <p className="page-links"><Link to="/contact">Contact</Link> | <Link to="/legal">Legal</Link> | <Link to="/blog">Blog</Link></p>
            <p>Copyright 2019 Zymplify, Inc</p>
            <div className="font-grey social-links">
              <a href="https://facebook.com/Zymplify/" target="__blank" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/zymplify/" target="__blank" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com/Zymplify_CMP" target="__blank" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com/company/zymplify/" target="__blank" aria-label="Linkedin"><FaLinkedin /></a>
            </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row font-grey">
            <div className="col-md-3 mb-3">
              <Promenade/>
              <p>24-27 The Promenade</p>
              <p>Portstewart</p>
            </div>
            <div className="col-md-3">
              <Titanic/>
              <p>Donegal Square West</p>
              <p>Belfast</p>
            </div>
            <div className="col-md-3">
              <London/>     
              <p>Regents House, Angel</p>
              <p>London</p>
            </div>
            <div className="col-md-3">
              <Boston/>
              <p>Bedford Street</p>
              <p>Boston, MA</p>
            </div>
          </div>
        </div>
      </footer>
      <style jsx="true">{`
        footer {
          background-color: #363636;
        }

        .font-grey {
          color: #666666 !important;
          text-align: center;
        }
        .social-links a {
          margin: 5px;
          font-size: 25px;
        }
        
        .page-links a,
        .social-links a {
          color: #666666 !important;
          text-decoration: none;
        }

      `}</style>
    </React.Fragment>
  )
}
