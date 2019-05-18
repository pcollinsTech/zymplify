import React from 'react'

export default function Item({image, list}) {
  console.log(image)
  return (
    <React.Fragment>
      <div className="col-md-3 service-item">
        <img src={image} alt="social" />
        <ul>
        { 
          list.map((item, i) => {

            return( <li className="service-text" key={i}>{item}</li>)
          })
        }
        </ul>
      </div>
      <style jsx >{`
        
        .service-text {
          text-align: center;
          font-size: 1.2rem;
          list-style: none;
        }
      `}</style>

    </React.Fragment>
  )
}
