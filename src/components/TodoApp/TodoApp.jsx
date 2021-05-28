import React, { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

export default class TodoApp extends Component{
  constructor(props){
    super(props);

    this.state={
        items: [],
        id: 0,
        item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(newItem);

    const updateItem = [...this.state.items, newItem];

    this.setState({
      items: updateItem,
      item: '',
      id: this.state.id + 1
    });
  };

  render(){
    return (
      <div>
        <TodoForm
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList items={this.state.items}/>
      </div>
    )
  }
}