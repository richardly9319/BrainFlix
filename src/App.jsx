import './App.scss';
import Navbar from './components/Navbar/Navbar';
import SelectedVideo from './components/SelectedVideo/SelectedVideo';
import VideoDesc from './components/VideoDesc/VideoDesc';
import Comments from './components/Comments/Comments';
import VideoDetails from './assets/Data/video-details.json';
import { useState } from 'react';
import NextVideos from './components/NextVideos/NextVideos';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <SelectedVideo selectedVideo={selectedVideo} />
      <div className="Desc-Comments-NextVideos-Container">
      <div className="Desc-Comments-Container">
      <VideoDesc />
      <Comments videoDetails={VideoDetails} selectedVideo={selectedVideo} />
      </div>
      <NextVideos videoDetails={VideoDetails} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
      </div>
    </div>
  );
}

export default App;