import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppHeader from '../AppHeader';
import TodoApp from '../TodoApp';
import PageNotFound from '../PageNotFound';
import './App.css';
class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="app">
          <div className="app-wrap">
            <Route exact path='/' component={AppHeader} />
            <Switch>
              <Route exact path='/' component={TodoApp} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;