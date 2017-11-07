import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

// COMPONENTS
import SearchBar from './components/SearchBar'

const API_KEY = 'AIzaSyBdsxjEBpjPrdRVLIRomjrCFIU46V_jBKk'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      videos:[]
    }

    YTSearch({key: API_KEY, term: 'CLimbing'}, (videos) => {
      this.setState({ videos })
      console.log(this.state.videos)
    })
  }


  render() {
    return (
      <div>
      <SearchBar />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))
