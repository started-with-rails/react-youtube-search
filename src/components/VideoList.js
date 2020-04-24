import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onSelected}) => {
		const videoslist = videos.map((video) => {
			return <VideoItem video={video} key={video.id.videoId} onSelectVideo={onSelected}/>
		})
		return(
			<div className="ui celled list"  style={{marginTop:  '5px'}}>{videoslist}</div>
		)
}
export default VideoList;