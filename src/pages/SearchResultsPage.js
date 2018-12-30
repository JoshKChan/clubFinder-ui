import React, { Component } from 'react';
import { SearchResults, TopBar } from '../components';

export class SearchResultsPage extends Component {
  render() {
    return (
      <div className='searchResultsPage'>
        <TopBar />
        <SearchResults />
      </div>
    );
  }
}
