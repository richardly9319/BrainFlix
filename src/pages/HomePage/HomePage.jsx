import './HomePage.scss';
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
import VideoDesc from '../../components/VideoDesc/VideoDesc';
import Comments from '../../components/Comments/Comments';
// import VideoDetails from '../../assets/Data/video-details.json';
import NextVideos from '../../components/NextVideos/NextVideos';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function HomePage() {

    

    const api_key = 'b04ab6d2-ad95-4864-84a1-de9112c9f4df';

    const [VideoDetails, setVideoDetails] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(0);
    const [selectedVideoDetails, setSelectedVideoDetails] = useState({});


    const { videoID } = useParams();

    useEffect(() => {
      axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${api_key}`)
      .then((response) => {
        setVideoDetails(response.data);
      }
      ).catch((err) => console.error(err));
    }, [])

    useEffect(() => {
        if (videoID) {
          console.log("videoID: ", videoID);
        // axios.get(`https://project-2-api.herokuapp.com/videos/${videoID}?api_key=${api_key}`)
        // .then((response) => {
          // console.log("response.data: ", response.data);
          // console.log("videoID: ", videoID);
          // console.log("VideoDetails!!: ", VideoDetails);
          setSelectedVideo(VideoDetails.findIndex((video) => {
            
            return video.id == videoID;
          }))
          
        // }).catch((err) => console.error(err));
      }
      else {
        setSelectedVideo(0);
          // axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${api_key}`)
          // .then((response) => {
          //   setVideoDetails(response.data);
          // }).catch((err) => console.error(err));
      }
      
    }, [videoID]);

    useEffect(() => {
      if (videoID) {
        axios.get(`https://project-2-api.herokuapp.com/videos/${videoID}?api_key=${api_key}`)
        .then((response) => {
          // console.log('SELECTED RESPONSE: ', response.data);
          setSelectedVideoDetails(response.data);

    })
      }
    
      else {
        
        axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${api_key}`).then(
          response => {
            console.log("RESPONSE!!!!!", response.data);
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