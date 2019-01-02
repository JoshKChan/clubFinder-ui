import React, { Component } from 'react';
import { Menu, Form, Button } from 'semantic-ui-react';

export class TopBar extends Component {
  // State and eventhandlers that manipulate the state are passed in from the
  // parent component and are stored in props.

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
            <Form onSubmit={this.props.handleSubmit}>
              <Form.Input placeholder='Search...' style={{ width: '400px' }} 
                onChange={this.props.handleChange} />
            </Form>
          </Menu.Item>
          <Menu.Item position='right'>
            To create and manage your own clubs and events &nbsp;
            <Button primary>Log in/Sign up</Button> 
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
