import React, { Component } from 'react';
import './FilterList.css';

export default class FilterList extends Component{
  buttons = [
    {name: 'all', label:'All'},
    {name: 'active', label:'Active'},
    {name: 'done', label:'Done'},
    {name: 'important', label:'Important'}
  ]
  render(){
    const {updateTodoFilter} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      return(
      <button type="button" key={name} onClick={() => updateTodoFilter(name)}>{label}</button>
      )
    })
    return (
      <div className="filterList">
        <p>Filter list:</p>
        <div>
          {buttons}
        </div>
      </div>
    )
  }
}
