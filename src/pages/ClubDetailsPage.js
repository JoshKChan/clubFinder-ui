import React, { Component } from 'react';
import { TopBar, FilterSidebar, ClubDetailsView } from '../components';

export class ClubDetailsPage extends Component {
  constructor(props) {
    super(props);
    // Need to put these attributes into a field, viewingClub 
    this.state = {
      search: '',
      submittedSearch: '',
      searchResults: [],
      name: 'Soccer Club',
      description: 'We play soccer',
      address: '123 Fake Street',
      manager: {
          userId: 45,
          name: 'Jon',
          email: 'Ben@mail.ca',
          phoneNumber: '999-9999'
      },
      contacts: [
        {
          userId: 1,
          name: 'Ben',
          position: 'Accountant',
          email: 'Ben@mail.ca',
          phoneNumber: '999-9999'
        },
        {
          userId: 2,
          name: 'Ben',
          position: 'Accountant',
          email: 'Ben@mail.ca',
          phoneNumber: '999-9999'
        }
      ],
      regularActivities: [
        'playing',
        'writing'
      ],
      events: [
        {
          eventId: 20,
          name: 'concert',
          location: '234 Newyork Ave',
          dateAndTime: 'Dec 12'
        },
        {
          eventId: 20,
          name: 'concert',
          location: '234 Newyork Ave',
          dateAndTime: 'Dec 12'
        }
      ]
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
          <ClubDetailsView state={this.state} />
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}
