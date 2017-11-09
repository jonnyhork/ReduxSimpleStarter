import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducerActiveBook'

// any key that we provide to our combineReducers ends up as a key to global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
})

export default rootReducer;
