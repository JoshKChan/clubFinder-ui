import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export class SearchResults extends Component { 
  constructor(props) {
    super(props);
    this.list = [
      {
        _id: 1,
        name: "yolo",
        location: "somewhere",
        distance: 2
      },
      {
        _id: 2,
        name: "yoyo",
        location: "nowhere",
        distance: 3.5
      },
      {
        _id: 3,
        name: "hoho",
        location: "everywhere",
        distance: 4.5
      },
      {
        _id: 1,
        name: "yolo",
        location: "somewhere",
        distance: 2
      },
      {
        _id: 2,
        name: "yoyo",
        location: "nowhere",
        distance: 3.5
      },
      {
        _id: 3,
        name: "hoho",
        location: "everywhere",
        distance: 4.5
      },
      {
        _id: 1,
        name: "yolo",
        location: "somewhere",
        distance: 2
      },
      {
        _id: 2,
        name: "yoyo",
        location: "nowhere",
        distance: 3.5
      },
      {
        _id: 3,
        name: "hoho",
        location: "everywhere",
        distance: 4.5
      },
      {
        _id: 1,
        name: "yolo",
        location: "somewhere",
        distance: 2
      },
      {
        _id: 2,
        name: "yoyo",
        location: "nowhere",
        distance: 3.5
      },
      {
        _id: 3,
        name: "hoho",
        location: "everywhere",
        distance: 4.5
      },
      {
        _id: 1,
        name: "yolo",
        location: "somewhere",
        distance: 2
      },
      {
        _id: 2,
        name: "yoyo",
        location: "nowhere",
        distance: 3.5
      },
      {
        _id: 3,
        name: "hoho",
        location: "everywhere",
        distance: 4.5
      },
      {
        _id: 1,
        name: "yolo",
        location: "somewhere",
        distance: 2
      },
      {
        _id: 2,
        name: "yoyo",
        location: "nowhere",
        distance: 3.5
      },
      {
        _id: 3,
        name: "hoho",
        location: "everywhere",
        distance: 4.5
      },
      {
        _id: 1,
        name: "yolo",
        location: "somewhere",
        distance: 2
      },
      {
        _id: 2,
        name: "yoyo",
        location: "nowhere",
        distance: 3.5
      },
      {
        _id: 3,
        name: "hoho",
        location: "everywhere",
        distance: 4.5
      },
      {
        _id: 1,
        name: "yolo",
        location: "somewhere",
        distance: 2
      },
      {
        _id: 2,
        name: "yoyo",
        location: "nowhere",
        distance: 3.5
      },
      {
        _id: 3,
        name: "hoho",
        location: "everywhere",
        distance: 4.5
      },
    ];
  } 

  // Takes a list of club and event objects and maps it to a list of html
  // elements 
  // Need to differentiate between clubs and events!
  ListOfResults = (props) => {
    const searchResults = props.list.map((result) => 
      <List.Item key={result._id}>
        {undefined ? result.image : null}
        <List.Content floated='right'>
          {undefined ? result.distance : null}
          {result.distance}km
        </List.Content>
        <List.Content>
          <List.Header as='a' href="https://www.google.ca">{result.name}</List.Header>
          <List.Description>
            {result.location}
          </List.Description>
        </List.Content>
      </List.Item>
    );
    return (
      <List divided verticalAlign='middle' size='large'>
        {searchResults}
      </List>
    );
  }

  // Use this.props.searchResults instead of this.list
  render() {
    return (
      <div className='searchResults'>
        <div className='searchResultsHeader'>
          Search results for "{}"
        </div>
        <div className='searchResultsBody'>
          <this.ListOfResults list={this.list} />
        </div>
      </div>
    );
  }
}
