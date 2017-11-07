import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
// COMPONENTS
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'

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
      console.log(this.props.searchTerm)
    })
  }


  render() {
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))
