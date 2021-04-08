import React from 'react'
import VideoItem from './VideoItem'
import './VideoList.css'

const VideoList = ({videos, onVideoSelect})=>{
    const renderedList = videos.map((video)=>{
        return(
            <div>
                <VideoItem key={video.id.videoId} video = {video} onVideoSelect={onVideoSelect}/>
            </div>
        );
    })

    return (<div className="list-box">
                <div className="video-list">
                    {renderedList}
                </div>
            </div>
    );
}

export default VideoList;