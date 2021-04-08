import React from 'react'
import "./VideoItem.css"

const VideoItem = ({video, onVideoSelect})=>{
    return(
        <div onClick={()=> onVideoSelect(video)} className="video-item">
            <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <hr/>
            <div className="video-content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
        </div>
    );
}

export default VideoItem;