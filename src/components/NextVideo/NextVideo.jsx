import { Link } from 'react-router-dom';
import './NextVideo.scss';
// import { Link } from 'react-router-dom';

function NextVideo( { video, index, setSelectedVideo, videoDetails} ) {

  

    return (
      <Link to={`../homepage/${video.id}`}>
      <div className="NextVideo">
        <img className="NextVideo__image" src={video.image} alt="" />
        <div className="NextVideo__title-channel">
            <h2 className="NextVideo__title">{video.title}</h2>
            <p className="NextVideo__channel">{video.channel}</p>
        </div>
      </div>
      </Link>
    );
  }
  
  export default NextVideo;