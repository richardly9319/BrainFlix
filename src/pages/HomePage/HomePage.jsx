import './HomePage.scss';
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
import VideoDesc from '../../components/VideoDesc/VideoDesc';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function HomePage() {

    
    const url = 'http://localhost:8080/videos/';
    
    
    const [VideoDetails, setVideoDetails] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(0);
    const [selectedVideoDetails, setSelectedVideoDetails] = useState({});

    const defaultVideoID = '84e96018-4022-434e-80bf-000ce4cd12b8';

    const { videoID } = useParams();

    useEffect(() => {
      axios.get(url)
      .then((response) => {
        setVideoDetails(response.data);
        setSelectedVideoDetails(response.data[0])
      }
      ).catch((err) => console.error(err));
    }, [])

    useEffect(() => {
        if (videoID) {
        
          setSelectedVideo(VideoDetails.findIndex((video) => {
            
            return video.id == videoID;
          }))
          
      }
      else {
        setSelectedVideo(0);
          
      }
      
    }, [videoID]);

    

    useEffect(() => {
      if (videoID) {
        axios.get(`${url}${videoID}`)
        .then((response) => {
          setSelectedVideoDetails(response.data);

    })
      }
    
      else {
        
        axios.get(`${url}${defaultVideoID}`).then(
          response => {
            setSelectedVideoDetails(response.data);
          }
        )
        }
    }, [videoID])

  return (
        <>
      <SelectedVideo selectedVideo={selectedVideo} VideoDetails={VideoDetails} />
      <div className="Desc-Comments-NextVideos-Container">
      <div className="Desc-Comments-Container">
      <VideoDesc videoDetails={VideoDetails} selectedVideo={selectedVideo} selectedVideoDetails={selectedVideoDetails} />
      <Comments videoDetails={VideoDetails} selectedVideoDetails={selectedVideoDetails} />
      </div>
      <NextVideos videoDetails={VideoDetails} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
      </div>
      </>
  )
}

export default HomePage;