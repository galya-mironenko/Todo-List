import React , { Component } from 'react';

export default class TodoForm extends Component{
  render(){
  const {item, handleChange, handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write your task"
            value={item || ''}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}