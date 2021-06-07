import React, { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import './TodoApp.css';
import {v1 as uuid} from "uuid";
export default class TodoApp extends Component{
  constructor(props){
    super(props);
    this.state={
      items: [],
      id: uuid(),
      item: '',
      important: false,
      done: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
  }

  async componentDidMount(){
    try{
      const res = await fetch('http://localhost:3000/posts');
      const data = await res.json();
      this.setState({items: data});
    }
    catch(error){
      return console.log('Could not fetch', error);
    }
   }

  handleChange(e){
    const target = e.target;
    this.setState({
      item: target.value,
    });
  }

  async handleSubmit(e){
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      done: this.state.done,
      important: this.state.important
    }
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newItem)
    }

    try{
      await fetch('http://localhost:3000/posts', requestOptions);
    }
    catch(error){
        return console.log('Could not fetch', error);
    }

    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: '',
      id: uuid(),
      important: false,
      done: false
    });
  };

  handleToggleProperty(arr, id, propName){
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    }
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  handleImportantItem = (id) => {
    this.setState(({items}) => {
      return{
        items: this.handleToggleProperty(items, id, 'important')
      }
    });
  }

  handleDoneItem = (id) => {
    this.setState(({items}) => {
      return{
        items: this.handleToggleProperty(items, id, 'done')
      }
    });
  }

  async handleDeleteItem(id){
    let url = `http://localhost:3000/posts/${id}`;
    try{
      await fetch(url, {method: 'DELETE'});
    }
    catch(error){
      return console.log('You have error, you cant delete item', error);
    }

    this.setState(({items}) => {
      const idx = items.findIndex((el) => el.id === id);
      const filteredItems = [
        ...items.slice(0, idx),
        ...items.slice(idx + 1)
      ];
      return{
        items: filteredItems
      }
    })
  }

  async handleClearList(ids){
    try{
      ids.forEach(element => {
        let url = `http://localhost:3000/posts/${element.id}`;
        fetch(url, {method: 'DELETE'});
      });
    }
    catch(error){
      return console.log('You have error, you cant delete item', error);
    }

    this.setState({
      items: []
    })
  }

  render(){
    return (
      <div>
        <TodoForm
          className="todoApp"
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          items={this.state.items}
          handleDeleteItem={this.handleDeleteItem}
          handleClearList={this.handleClearList}
        />
      </div>
    )
  }
}

