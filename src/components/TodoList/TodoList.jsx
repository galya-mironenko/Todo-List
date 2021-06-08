import React, { Component } from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';
import PropTypes from 'prop-types';

export default class TodoList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {items, handleDeleteItem, handleClearList, handleImportantItem, handleDoneItem} = this.props;
    return (
      <ul>
        {items && items.map(item => {
          return(
            <TodoListItem
              key={item.id}
              title={item.title}
              important={item.important}
              done={item.done}
              handleDeleteItem={()=> handleDeleteItem(item.id)}
              handleImportantItem={()=> handleImportantItem(item.id, item.important)}
              handleDoneItem={()=> handleDoneItem(item.id, item.done)}
            />
          );
        })
        }
        <button className="btn-clear" onClick={() => handleClearList(items)}>Clear TodoList</button>
      </ul>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleImportantItem: PropTypes.func,
  handleDoneItem: PropTypes.func,
  handleDeleteItem: PropTypes.func,
  handleClearList: PropTypes.func
};