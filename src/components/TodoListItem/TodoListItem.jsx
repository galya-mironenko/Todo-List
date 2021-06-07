import React , { Component } from 'react';
import './TodoListItem.css';
import PropTypes from 'prop-types';
export default class TodoListItem extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     important: false,
  //     done: false
  //   }
  // }

  // handleImportantItem = () => {
  //   this.setState(({important}) => {
  //     return {
  //       important: !important
  //     }
  //   });
  // }

  // handleDoneItem = () => {
  //   this.setState(({done}) => {
  //     return{
  //       done: !done
  //     }
  //   });
  // }

  render(){
    const {title, handleDeleteItem, handleImportantItem, handleDoneItem, important, done} = this.props;
    let classNames = "todo-item";
    if(important){
      classNames += ' important ';
    }
    if(done){
      classNames += ' done ';
    }
   return(
     <li className="list-item">
         <span className={classNames} onClick={handleDoneItem}>{title}</span>
         <div>
           <button className="btn" onClick={handleImportantItem}>Important</button>
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