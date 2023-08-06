import './VideoDesc.scss';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';


function VideoDesc( { videoDetails, selectedVideo, selectedVideoDetails } ) {
    // console.log("video Details in VIDEODESC", videoDetails);
    // console.log("selectedVideo in VIDEODESC", selectedVideo);
    // let selected = 0;
    // if (selectedVideo != 0) {
       let selected = selectedVideo;
    // }
    let video = selectedVideoDetails;

    console.log('selectedVIDEODETAILS VIDEODESC', video);

    return (
        <>
        <h1 className="video__title">{video?.title}</h1>
        <div className="video__info">
            <div className="video__info-channel-date">
                <h2 className="video__channel">By {video?.channel}</h2>
                <p>{video?.timestamp}</p>
            </div>
            <div className="video__info-likes-views">
                <div className="video__info-views">
                    <img src={viewsIcon} alt="view" />
                    <p>{video?.views}</p>
                </div>
                <div className="video__info-likes">
                    <img src={likesIcon} alt="likes" />
                    <p>{video?.likes}</p>
                </div>
            </div>
        
        </div>
        <div className="video__description">
            <p>{video?.description}</p>
        </div>
        </>
        )
}

export default VideoDesc;