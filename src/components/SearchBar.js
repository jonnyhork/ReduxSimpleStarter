import React, { Component } from 'react'

class SearchBar extends Component {

  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     searchTerm: ''
  //   }
  // }

  state = {
    searchTerm: ''
  }

  render() {
    return (
      <div>
      <input
      value={this.state.searchTerm}
      onChange={ e => this.setState({searchTerm: e.target.value}) }
      />
      Value of the input is: {this.state.searchTerm}
      </div>
    )
  }
}


export default SearchBar
