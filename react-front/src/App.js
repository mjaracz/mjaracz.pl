import React, { Component } from 'react';
import Header from './Header/Header';

import ProjectList from './ProjectList/ProjectList';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path='/' component={ProjectList}/>
        </div>
      </Router>
    );
  }
}

export default App;
