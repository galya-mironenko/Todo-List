import React from 'react';
import AppHeader from '../AppHeader';
import TodoApp from '../TodoApp';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="app">
        <div className="app-wrap">
          <AppHeader />
          <TodoApp />
        </div>
      </div>
    )
  }
}

export default App;