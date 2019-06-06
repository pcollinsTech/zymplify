import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

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
      <div className="col-md-3">
        <div onClick={this.toggle} className="item">
          <h4 color="primary" style={{ marginBottom: '1rem' }}>{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <ul>
            {this.props.list.map(item => {
              return <li>{item}</li>
            })}
          </ul>
        </Collapse>
      </div>
    );
  }
}

export default Example;