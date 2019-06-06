import React, { Component } from 'react'
import HeroImage from "../Images/RiverhouseBelfast/HeroImage.js"

class Hero extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <HeroImage />
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
            color: white;
          }
        `}</style>

      </React.Fragment>
    )
  }
}



export default Hero;
