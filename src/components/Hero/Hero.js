import React, { Component } from 'react'
import hero from '../../images/50009502_2242236916019618_7563559900723281920_o.jpg'
import Hero from "../Images/Hero"
const heroImage = {
  width: "100%"
}

class Hero extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <Hero />
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
