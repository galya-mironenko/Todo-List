import React from 'react';
import AppHeader from '../AppHeader';
import TodoApp from '../TodoApp';

class App extends React.Component{
  render(){
    return (
      <div>
        <AppHeader />
        <TodoApp />
      </div>
    )
  }
}

export default App;