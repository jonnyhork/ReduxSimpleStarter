export const selectBook = (book) => {
  // selectbook is an action creator, it needs to return an action. An object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
