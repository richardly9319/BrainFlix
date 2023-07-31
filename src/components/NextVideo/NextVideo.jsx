import './NextVideo.scss';

function NextVideo( { video, index, setSelectedVideo, findVideoIndex, videoDetails} ) {


  

    return (
      <div onClick={() => { setSelectedVideo(findVideoIndex(videoDetails, video.id)) }} className="NextVideo">
        <img className="NextVideo__image" src={video.image} alt="" />
        <div className="NextVideo__title-channel">
            <h2 className="NextVideo__title">{video.title}</h2>
            <p className="NextVideo__channel">{video.channel}</p>
        </div>
      </div>
    );
  }
  
  export default NextVideo;