import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
// COMPONENTS
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = 'AIzaSyBdsxjEBpjPrdRVLIRomjrCFIU46V_jBKk'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      videos:[],
      selectedVideo: null
    }

    this.videoSearch('Bouldering')

  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       })
      // console.log(this.state.videos)
    })
  }


  render() {
    // this will throttle the view update as the user types in the search bar, the function will only fire every 300ms
    const videoSearch = _.debounce( (searchTerm) => {this.videoSearch(searchTerm)}, 300)

    return (
      <div>
        <SearchBar
          onSearchTermChange={ videoSearch }
        />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))
