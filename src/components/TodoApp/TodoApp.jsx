import React, { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import FilterList from '../FilterList';
import './TodoApp.css';
import {v1 as uuid} from "uuid";
const axios = require('axios');

export default class TodoApp extends Component{
  constructor(props){
    super(props);
    this.state={
      items: [],
      id: uuid(),
      item: '',
      important: false,
      done: false,
      filter: 'all'

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
  }
  async componentDidMount(){
    await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
      .then(response =>
        this.setState({items: response.data})
      )
      .catch(error => {
        console.error('There was an error!', error);
    });
  }

  handleChange(e){
    const target = e.target;
    this.setState({
      item: target.value,
    });
  }

  async handleSubmit(e){
    e.preventDefault();
    let newItem = {
        id: this.state.id,
        title: this.state.item,
        done: this.state.done,
        important: this.state.important
    }
    const updateItem = [...this.state.items, newItem];

    let headers =  {
      'Content-Type': 'application/json',
    }
  await axios.post(`${process.env.REACT_APP_API_URL}/posts `, JSON.stringify(newItem), {headers})
    .then(
      this.setState({
          items: updateItem,
          item: '',
          id: uuid(),
          important: false,
          done: false
      })
    )
    .catch((error) => {
      return console.log('Could not fetch done', error);
    })
  }

  handleToggleProperty = (arr, id, propName) => {
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

  handleImportantItem = async (id, important) => {
    const statusDone = {
      important: !important
    }

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    await axios.patch(`${process.env.REACT_APP_API_URL}/posts/${id}`, statusDone, {options})
    .then(
      this.setState(({items}) => {
        return{
          items: this.handleToggleProperty(items, id, 'important'),
          }
        })
    )
    .catch((error) => {
      return console.log('Could not fetch done', error);
    })
  }

  handleDoneItem = async (id, done) => {
    const statusDone = {
      done: !done
    }

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await axios.patch(`${process.env.REACT_APP_API_URL}/posts/${id}`, statusDone, {options})
    .then(
      this.setState(({items}) => {
        return{
          items: this.handleToggleProperty(items, id, 'done'),
          }
        })
    )
    .catch((error) => {
      return console.log('Could not fetch done', error);
    })
  }


  async handleDeleteItem (id){
    await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`)
    .then(
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
    )
    .catch((error) => {
      return console.log('You have error, you cant delete item', error);
    })
  }

  handleClearList(ids){
    ids.forEach(element => {
      axios.delete(`${process.env.REACT_APP_API_URL}/posts/${element.id}`)
      .then(
        this.setState({
          items: []
        })
      )
      .catch((error) => {
        return console.log('You have error, you cant delete all todo-list', error)
      })
    })
  }

  updateTodoFilter = (s) => {
    this.setState({
      filter: s
    })
  }

  render(){
    let items = [];
      if(this.state.filter === 'all'){
        items = this.state.items;
      }else if (this.state.filter === 'active'){
        items = this.state.items.filter(item => !item.done);
      }else if (this.state.filter === 'done'){
        items = this.state.items.filter(item => item.done);
      }else if (this.state.filter === 'important'){
        items = this.state.items.filter(item => item.important);
      }

    return (
      <div>
        <div className='searchFilter'>
          <FilterList
            updateTodoFilter= {this.updateTodoFilter}
          />
        </div>
        <TodoForm
          className="todoApp"
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          items={items}
          handleDeleteItem={this.handleDeleteItem}
          handleClearList={this.handleClearList}
          handleImportantItem={this.handleImportantItem}
          handleDoneItem={this.handleDoneItem}
        />
      </div>
    )
  }
}

