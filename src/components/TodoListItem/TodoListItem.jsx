import React , { Component } from 'react';

export default class TodoListItem extends Component{
  render(){
    const {title} = this.props;
   return(
     <li>
       <p>{title}</p>
     </li>
   )
 }
}
