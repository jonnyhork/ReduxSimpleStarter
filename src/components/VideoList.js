import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos }) => {

   const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  })

  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )


}

export default VideoList


// videos.map( (video) => <VideoListItem  video={video} />)
