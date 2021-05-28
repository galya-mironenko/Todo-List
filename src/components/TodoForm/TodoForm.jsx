import React , { Component } from 'react';
import './TodoForm.css';

export default class TodoForm extends Component{
  render(){
  const {item, handleChange, handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Write your task"
            value={item || ''}
            onChange={handleChange}
          />
          <button className="btn btn-add" type="submit">Add</button>
        </form>
      </div>
    )
  }
}