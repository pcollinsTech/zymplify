import React, { Component } from 'react'
import news from '../../images/headings/news-views.png'


const newsHeader = {
  contentAlign: 'center',
  maxWidth: '300px',
  height: '80px',
}
class News extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row" id="about">

          <img className="mx-auto" src={news} style={newsHeader} alt="news"/>
          <div className="container">
            {
              
            }
          </div>

        </div>

      </div>
    )
  }
}

export default News
