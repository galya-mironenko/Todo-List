import React, { Component } from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';
export default class PageNotFound extends Component{
  render(){
    return (
      <div className="page-not-found">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/">
          Go to My Todo List
        </Link>
      </div>
    )
  }
}
