import React, { Component } from 'react';
import { SearchResults, TopBar, FilterSidebar } from '../components';
import axios from 'axios';

export class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      submittedSearch: '',
      searchResults: []
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
      <div className='searchResultsPage'>
        <TopBar handleChange={this.handleSearchChange} 
          handleSubmit={this.handleSearchSubmit} 
          state={this.state} />
        <div className='pageContent'>
          <FilterSidebar />
          <SearchResults list={this.state.searchResults} />
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}
