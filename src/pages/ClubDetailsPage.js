import React, { Component } from 'react';
import { TopBar, FilterSidebar, ClubDetailsView } from '../components';

export class ClubDetailsPage extends Component {
  constructor(props) {
    super(props);
    // Need to add viewingClub 
    this.state = {
      search: '',
      submittedSearch: '',
      searchResults: [],
      name: 'Soccer Club',
      description: 'We play soccer',
      address: '123 Fake Street',
      manager: 'John'
    }
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSearchSubmit = () => {
    // axios call here
    // set search and searchResults afterwards
    this.setState({ submittedSearch: this.state.search });
  }
  render() {
    return (
      <div className="clubDetailsPage">
        <TopBar handleChange={this.handleSearchChange} 
          handleSubmit={this.handleSearchSubmit} 
          state={this.state} />
        <div className='pageContent'>
          <FilterSidebar />
          <ClubDetailsView state={this.state} />
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}
