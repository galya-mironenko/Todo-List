import React, { Component } from 'react';
import TodoListItem from '../TodoListItem';

export default class TodoList extends Component{
  render(){
    const {items} = this.props;
    return (
      <ul>
        {items && items.map(item => {
          return(
            <TodoListItem
              key={item.id}
              title={item.title}
            />
          )
        })
        }
      </ul>
    );
  }
}