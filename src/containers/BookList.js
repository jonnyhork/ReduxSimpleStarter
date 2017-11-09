import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions'
import { bindActionCreators } from 'redux'

class BookList extends Component {

  renderList() {
    return this.props.books.map( book =>{
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }


}

// this function is the glue between react and redux
const mapStateToProps = (state) => { // first argument is a state
  // whatever gets returned from here will show up as props in bookslist
  return {
    books: state.books
  }
}
// anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  // whenever selectBook is called, the result should be passed to
  // all of our reducers
  return bindActionCreators({ selectBook }, dispatch)
  // bindActionCreators will take what gets returned from the action, an object, and make sure it gets passed to all the reducers.
}
// promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
// connect takes a function and a container
