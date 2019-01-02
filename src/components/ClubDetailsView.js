import React, { Component } from 'react';

export class ClubDetailsView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="clubDetailsView">
        <div className='clubName'>
          <h1>{this.props.state.name}</h1>
        </div>
        <div className='clubDescription'>
          <h3>Description</h3>
          {this.props.state.description}
        </div>
        <div className='location'>
          <h3></h3>
          {this.props.state.address}
        </div>
        <div className='manager'>
          {this.props.state.manager}
        </div>
        <div className='contacts'>
        </div>
        <div className='events'>
        </div>
      </div>
    )
  }
}
