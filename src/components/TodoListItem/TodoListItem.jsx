import React , { Component } from 'react';
import './TodoListItem.css';
import PropTypes from 'prop-types';
export default class TodoListItem extends Component{
  constructor(props){
    super(props);
    this.state={
      important: false,
      done: false
    }
  }

  handleImportantItem = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    });
  }

  handleDoneItem = () => {
    this.setState(({done}) => {
      return{
        done: !done
      }
    });
  }

  render(){
    const {title, handleDeleteItem} = this.props;
    const {important, done} = this.state;
    let classNames = "todo-item";
    if(important){
      classNames += ' important ';
    }
    if(done){
      classNames += ' done ';
    }
   return(
     <li className="list-item">
         <span className={classNames} onClick={this.handleDoneItem}>{title}</span>
         <div>
           <button className="btn" onClick={this.handleImportantItem}>Important</button>
           <button className="btn" onClick={handleDeleteItem}>Delete</button>
         </div>
     </li>
   )
 }
}

TodoListItem.propTypes = {
  title: PropTypes.string,
  handleDeleteItem: PropTypes.func.isRequired
}