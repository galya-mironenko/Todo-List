import React, { Component } from 'react';
import './FilterList.css';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default class FilterList extends Component{
  buttons = [
    {status: 'all', label:'All'},
    {status: 'active', label:'Active'},
    {status: 'done', label:'Done'},
    {status: 'important', label:'Important'}
  ]
  render(){
    const {updateTodoFilter} = this.props;
    const buttons = this.buttons.map(({status, label}) => {
      return(
        <Link to={status} key={status} onClick={() => updateTodoFilter(status)} >
          {label}
        </Link>
      )
    })
    return (
      <div className="filterList">
        <p>Filter list:</p>
        <div className='button'>
          {buttons}
        </div>
      </div>
    )
  }
}

// function Button(props){
//   const {name, label, updateTodoFilter} = props;
//   const heandler = React.useCallback(() => updateTodoFilter(name), [updateTodoFilter, name]);
// return(
//   <button type="button" key={name} onClick={heandler}>{label}</button>
// )
// }
