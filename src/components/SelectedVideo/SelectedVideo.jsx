// import videos from '../../assets/Data/videos.json';
import './SelectedVideo.scss';

function SelectedVideo( { selectedVideo, VideoDetails } ) {


    let videos = VideoDetails;
    return (
        <>
        <video controls className="selected-video" src={videos[selectedVideo]} poster={videos[selectedVideo]?.image} >
        
        
        </video>
        </>
    );
}

export default SelectedVideo;