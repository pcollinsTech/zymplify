import React from 'react'

import about from '../../images/headings/about.png'

export default () => {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row" id="about">

          <img className="mx-auto home-header" src={about} alt="about" />
          <div className="container mt-5 mb-5">
            <div className="row">
            
              <div className="about-text">
                <p>Result-Driven Digital Marketing Agency</p>
                <p>
                  We are Digital Works, a creative digital marketing agency working with brands in the U.K. 
                  and Ireland specialising in social media, content marketing and online brand development.
                </p>
                <p>
                  “Bringing brands to life online” is our company tag line for a reason. We immerse ourselves 
                  into your business to ensure that we create and share content online that showcases your business 
                  in a personal, trustworthy and memorable manner. 
                </p>
              </div>
            </div>
          
          </div>
        </div>

      </div>
      <style jsx>{`
       .about-text {
        text-align: center;
        font-family: 'Sans-serif';
        font-size: 1.4rem;
       }
      `}</style>
    </React.Fragment>
  )
}

