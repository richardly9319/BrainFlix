import './NextVideos.scss';
import NextVideo from "../NextVideo/NextVideo";


function NextVideos( { videoDetails, selectedVideo, setSelectedVideo} ) {

      

      


    


        let selectedVideoID = videoDetails[selectedVideo]?.id;
    
        
        let NextVideosList = [];
        
        if (videoDetails) {
          NextVideosList = videoDetails?.filter((video) => {
            if (video?.id !== selectedVideoID) {
                return video }}).map((video, index) => {
                    return (
                        <NextVideo video={video} index={index} setSelectedVideo={setSelectedVideo} videoDetails={videoDetails}/>
                    )
                })
        }
        
                
        

    


    return (
      <div className="NextVideos">
        <h4>NEXT VIDEOS</h4>
       {NextVideosList}
      </div>
    );
  }
  
  export default NextVideos;