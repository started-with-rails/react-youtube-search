import React  from 'react';

const SelectedVideo = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    return(
        <div className="ui" style={{marginTop:  '5px'}}>
            <iframe width="720" height="420"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}>
            </iframe>
            <div className="ui content">{video.snippet.description}</div>
        </div>
    )
}
export default SelectedVideo;