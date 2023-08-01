import './HomePage.scss';
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
import VideoDesc from '../../components/VideoDesc/VideoDesc';
import Comments from '../../components/Comments/Comments';
import VideoDetails from '../../assets/Data/video-details.json';
import NextVideos from '../../components/NextVideos/NextVideos';

import { useState } from 'react';

function HomePage() {

    const [selectedVideo, setSelectedVideo] = useState(0);

  return (
        <>
      <SelectedVideo selectedVideo={selectedVideo} />
      <div className="Desc-Comments-NextVideos-Container">
      <div className="Desc-Comments-Container">
      <VideoDesc />
      <Comments videoDetails={VideoDetails} selectedVideo={selectedVideo} />
      </div>
      <NextVideos videoDetails={VideoDetails} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
      </div>
      </>
  )
}

export default HomePage;