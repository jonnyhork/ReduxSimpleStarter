import React, { Component } from 'react'
import BookList from '../containers/BookList'
import BookDetail from '../containers/bookDetail'

export default class App extends Component {
  render() {
    return (
      <div>
          <BookDetail />
          <BookList />
      </div>
    )
  }
}
