import React from 'react'
import './videoDetail.css'

const VideoDetail = ({video})=>{
    if(!video){
        return <div></div>
    }
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
    return(
        <div className="video-box">
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} frameBorder="0"  allowfullscreen="true"/>
            </div>
            <div className="video">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}
export default VideoDetail;