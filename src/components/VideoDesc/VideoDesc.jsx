import './VideoDesc.scss';
import videos from '../../assets/Data/videos.json';
import videoDetails from '../../assets/Data/video-details.json';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';


function VideoDesc() {
    let selected = 0;
    let video = videos[selected];
    return (
        <>
        <h1 className="video__title">{video.title}</h1>
        <div className="video__info">
            <div className="video__info-channel-date">
                <h2 className="video__channel">By {video.channel}</h2>
                <p>{videoDetails[selected].timestamp}</p>
            </div>
            <div className="video__info-likes-views">
                <div className="video__info-views">
                    <img src={viewsIcon} alt="view" />
                    <p>{videoDetails[selected].views}</p>
                </div>
                <div className="video__info-likes">
                    <img src={likesIcon} alt="likes" />
                    <p>{videoDetails[selected].likes}</p>
                </div>
            </div>
        
        </div>
        <div className="video__description">
            <p>{videoDetails[selected].description}</p>
        </div>
        </>
        )
}

export default VideoDesc;