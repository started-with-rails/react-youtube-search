import React from 'react';
import  './Video.css';

const VideoItem = ({video,onSelectVideo}) => {
    return(
    <div className="videoItem item" onClick={() => onSelectVideo(video)}>
        <img className="ui middle aligned tiny image"  src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
    </div>
    )
};
export default VideoItem;
