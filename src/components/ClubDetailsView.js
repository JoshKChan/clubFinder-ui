import React, { Component } from 'react';

export class ClubDetailsView extends Component {
  constructor(props) {
    super(props);
  }

  contactsToList = (props) => {
    const list = this.props.state.contacts.map((contact) => 
      <li>
        {contact.name}<br/>
        {contact.position}<br/>
        {contact.email}<br/>
        {contact.phoneNumber}<br/>
      </li>
    );
    return (
      <ul>
        {list}
      </ul>
    );
  }

  eventsToList = (props) => {
    const list = this.props.state.events.map((event) => 
      <li>
        <a href="https://www.google.ca">{event.name}</a><br/>
        {event.location}<br/>
        {event.dateAndTime}<br/>
      </li>
    );
    return (
      <ul>
        {list}
      </ul>
    );
  }

  regActivitiesToList = (props) => {
    const list = this.props.state.regularActivities.map((activity) =>
      <li>
        {activity}<br/>
      </li>
    );
    return (
      <ul>
        {list}
      </ul>
    );
  }

  render() {
    return (
      <div className='clubDetailsView'>
        <div className='clubDetailsContacts'>
          <div className='manager'>
            <h3>Manager</h3>
            <ul>
              <li>{this.props.state.manager.name}<br/></li>
              <li>{this.props.state.manager.email}<br/></li>
              <li>{this.props.state.manager.phoneNumber}<br/></li>
            </ul>
          </div>
          <div className='contacts'>
            <h3>Other Contacts</h3>
            <this.contactsToList props={this.props} />
          </div>
        </div>
        <div className='clubDetailsDescription'>
          <div className='clubName'>
            <h1>{this.props.state.name}</h1>
          </div>
          <div className='location'>
            <h3>Address</h3>
            <p>{this.props.state.address}</p>
          </div>
          <div className='clubDescription'>
            <h3>Description</h3>
            <p>{this.props.state.description}</p>
          </div>
          <div className='events'>
            <h3>Events</h3>
            <this.eventsToList props={this.props} />
          </div>
          <div className='regActivities'>
            <h3>Regular Activities</h3>
            <this.regActivitiesToList props={this.props} />  
          </div>
        </div>
      </div>
    )
  }
}
