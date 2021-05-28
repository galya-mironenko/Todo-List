import React, { Component } from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

export default class TodoList extends Component{
  render(){
    const {items, handleDeleteItem, handleClearList} = this.props;
    return (
      <ul>
        {items && items.map(item => {
          return(
            <TodoListItem
              key={item.id}
              title={item.title}
              handleDeleteItem={()=> handleDeleteItem(item.id)}
            />
          );
        })
        }
        <button className="btn-clear" onClick={handleClearList}>Clear TodoList</button>
      </ul>
    );
  }
}