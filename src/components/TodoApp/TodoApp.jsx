import React, { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import './TodoApp.css';
export default class TodoApp extends Component{
  idItem = 1;
  constructor(props){
    super(props);
    this.state={
        items: [],
        id: this.idItem - 1,
        item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    // this.handleImportantItem = this.handleImportantItem(this);
    this.handleClearList = this.handleClearList.bind(this);
  }

  handleChange(e){
    const target = e.target;
    this.setState({
        item: target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: '',
      id: this.idItem++
    });
  };

  handleDeleteItem(id){
     this.setState(({items}) => {
        const idx = items.findIndex((el) => el.id === id);
        const filteredItems = [
            ...items.slice(0, idx),
            ...items.slice(idx + 1)
        ];
        return{
            items: filteredItems
        }
    })
}

// handleImportantItem(id){}

  handleClearList(){
    this.setState({
      items: []
    })
  }

  render(){
    return (
      <div>
        <TodoForm
          className="todoApp"
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          items={this.state.items}
          handleDeleteItem={this.handleDeleteItem}
        //   handleImportantItem={this.handleImportantItem}
          handleClearList={this.handleClearList}
        />
      </div>
    )
  }
}

