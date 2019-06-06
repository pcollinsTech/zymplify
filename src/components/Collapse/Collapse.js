import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { FaArrowRight } from "react-icons/fa/";

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="accord">

          <div onClick={this.toggle}>
             
            <h4 color="primary" style={{ marginBottom: '1rem' }}>
            {this.props.title}    
            <FaArrowRight className="arrow" />
            </h4>
            
          </div>
          
          <Collapse isOpen={this.state.collapse}>
          <p className="mt-3 mb-3">{this.props.description}</p>
            <ul>
              {this.props.list.map(item => {
                return <li>{item}</li>
              })}
            </ul>
          </Collapse>
        </div>
        <style jsx="true">{`
          .plus{
            
          }
          .accord{
            width: 100%;
            padding: 10px;
            border: 1px #525D7D solid;
            cursor: pointer;
            background-color: #f3f3f3;
            margin: 5px;

            ul{
              background: color: white;
            }
          }
          li{
            list-style: none;
            padding: 5px;
          }
        `}
        </style>

      </React.Fragment>
    );
  }
}

export default Example;
