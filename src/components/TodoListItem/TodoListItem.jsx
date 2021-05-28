import React , { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component{
  render(){
    const {title, handleDeleteItem} = this.props;
   return(
     <li className="list-item">
         <span className="todo-item">{title}</span>
         <div>
           <button className="btn">Important</button>
           <button className="btn" onClick={handleDeleteItem}>Delete</button>
         </div>
     </li>
   )
 }
}
