import React , { Component } from 'react';
import './TodoForm.css';
import PropTypes from 'prop-types';

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

TodoForm.propTypes = {
  item: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};