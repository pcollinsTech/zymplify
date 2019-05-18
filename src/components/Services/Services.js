import React from 'react'

import serviceHeader from '../../images/headings/services.png'
import Item from './Item';

import services from './services.json'

const servicesHeader = {
  contentAlign: 'center',
  maxWidth: '300px',
  height:'80px',
}
export default () => {
  return (
    <React.Fragment>

      <div className="container  mt-5">
        <div className="row" id="services">
          <img className="mx-auto mt-5" src={serviceHeader} style={servicesHeader} alt="services-heading"/>
          <div className="container mt-5">
            <div className="row">
              {
                services.map(service => {
                  return (<Item key={service.id} image={service.image} list={service.list} />)
                })
              }
              
            </div>
          </div>

        </div>

      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
         li {
           text-decortation:
         }
        `}</style>
    </React.Fragment>
  )
}

