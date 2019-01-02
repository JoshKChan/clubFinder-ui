import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import 'semantic-ui-css/semantic.min.css';

//import {
//} from './components';

import {
  Home,
  SearchResultsPage,
  ClubDetailsPage
} from './pages';

class ExamplePrivateComponent extends Component {
  render() {
    return (
      <div>test</div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  setUser = (user) => {
    this.setState({user: user});
  }
  
  // The "exact" prop will make it so that component is only rendered if the
  // path is exactly matched.
  // User "render={() => ()}" if you need to pass in extra props to the elements or
  // need to do inline rendering, otherwise use "component={}" 
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={ExamplePrivateComponent} />
            <Route path="/search" component={SearchResultsPage} />
            <Route path="/clubView" component={ClubDetailsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
