import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

export class FilterSidebar extends Component {
  constructor(props) {
    super(props);
    this.filters = [
      'option1',
      'option2',
      'option3'
    ];
  }

  makeCheckboxes = (props) => {
    const checkboxes = props.list.map((option) => 
      <li>
        <Checkbox label={option} />
      </li>
    );
    return (
        <ul>
          {checkboxes}
        </ul>
    );
  }
  
  render() {
    return (
      <div className="filterSidebar">
        <h3>Filter Placholder</h3>
        <div className='checkboxes'>
          <this.makeCheckboxes list={this.filters} />
        </div>
      </div>
    );
  }
}
