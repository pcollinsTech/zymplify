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
          <h1 className="centered">
            Zymplify<br/> Europe’s fastest growing Digital Marketing Automation Software Company, moves to Riverhouse Belfast. 
          </h1>
        </div>
        <style jsx="true">{`
          .centered {
            text-align: center;
            font-size: 35px;
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
