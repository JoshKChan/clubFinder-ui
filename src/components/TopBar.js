import React, { Component } from 'react';
import { Menu, Form, Button } from 'semantic-ui-react';

export class TopBar extends Component {
  constructor(props) {
    super(props);
    // State should also probably be passed in from the parent
    this.state = {
      search: '',
      submittedSearch: ''
    }
  }

  // Remember setState is async
  // These handlers should probably be passed in from the parent
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSubmit = () => {
    this.setState({ submittedSearch: this.state.search });
  }

  // Render search bar, logo, and sign-in/sign-up or name 
  // Can add location setting later
  render() {
    return (
      <div className='topBar'>
        <Menu>    
          <Menu.Item>
            Logo
          </Menu.Item>
          <Menu.Item>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input placeholder='Search...' style={{ width: '400px' }} 
                onChange={this.handleChange} />
            </Form>
          </Menu.Item>
          <Menu.Item position='right'>
            To create and manage your own clubs and events &nbsp;
            <Button primary>Log in/Sign up</Button> 
          </Menu.Item>
        </Menu>
        {/*
        search: {this.state.search} </br>
        submittedSearch: {this.state.submittedSearch}
        */}
      </div>
    );
  }
}
