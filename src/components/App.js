import React from 'react';
import SearchForm from './SearchForm';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import SelectedVideo from './SelectedVideo';
const KEY = '';


class App extends React.Component {
  state = {videos: [], selectedVideo: ''}
  OnsubmitForm = async value => {
    const response = await youtube.get('/search',{
      params: {
        key: KEY,
        part: 'snippet',
        maxResults: 5,
        q: value
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  };

  selectVideo = (video) => {
   this.setState({selectedVideo: video})
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchForm OnFormSubmit={this.OnsubmitForm}/>
        <div className="ui grid">
          <div className="ten wide column">
            <SelectedVideo video={this.state.selectedVideo}/>
          </div>
          <div className="six wide column">
            <VideoList videos={this.state.videos} onSelected={this.selectVideo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
