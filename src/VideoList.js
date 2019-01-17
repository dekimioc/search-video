import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const mappedVideos = props.videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video}/>
    })
    return (
        <div className="ui relaxed divided list">
            {mappedVideos}
        </div>
    )
};

export default VideoList;