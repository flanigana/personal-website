import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PageContainer from './pages/PageContainer';
import PageNotFound from './pages/PageNotFound';
import NavBar from './NavBar';
import './App.css';
import HeaderPage from './pages/HeaderPage';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <div id="header-container">
            <HeaderPage />
          </div>
          <NavBar />
          <div id="page-background">
            <div id="page-wrapper">
              <div id="page-container">
                <div id="page-body">
                  <Switch>
                    <Route path="/(|about|education|skills|projects|interests|contact)" component={PageContainer} />
                    <Route component={PageNotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
