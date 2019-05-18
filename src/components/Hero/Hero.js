import React, { Component } from 'react'
import hero from '../../images/hero.png'

const heroImage = {
  width: "100%"
}

class Hero extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <img src={hero} style={heroImage} alt="hero" />
          <p className="centered">
            Zymplify, Europe’s fastest growing Digital Marketing Automation Software Company, moves to Riverhouse Belfast. 
          </p>
        </div>
        <style jsx>{`
          .centered {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>

      </React.Fragment>
    )
  }
}



export default Hero;
