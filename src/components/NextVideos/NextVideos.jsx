import NextVideo from "../NextVideo/NextVideo";

function NextVideos( { videoDetails, selectedVideo, setSelectedVideo} ) {

      

      const findVideoIndex = (videos, videoID) => {
        
        return (
        videos.findIndex((video) => {
         
          return video.id == videoID
          
        })
        )


      }



      console.log("selectedVideo: ", videoDetails[selectedVideo].id);

      let x = findVideoIndex(videoDetails, videoDetails[selectedVideo].id);
      console.log('findVideo: ', x);


        let selectedVideoID = videoDetails[selectedVideo].id;
    
        console.log("videoDetails: ", videoDetails);
        console.log("selectedVideo: ", selectedVideo);
        let NextVideosList = videoDetails.filter((video) => {
            if (video.id !== selectedVideoID) {
                return video }}).map((video, index) => {
                    return (
                        <NextVideo video={video} index={index} setSelectedVideo={setSelectedVideo} findVideoIndex={findVideoIndex} videoDetails={videoDetails}/>
                    )
                })
                
        

    


    return (
      <div className="NextVideos">
        <h4>NEXT VIDEOS</h4>
       {NextVideosList}
      </div>
    );
  }
  
  export default NextVideos;