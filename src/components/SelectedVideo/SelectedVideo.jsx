import videos from '../../assets/Data/videos.json';
import './SelectedVideo.scss';

function SelectedVideo( { selectedVideo } ) {

    console.log('selectedVideo!!: ', selectedVideo);

    return (
        <>
        <video controls className="selected-video" src={videos[selectedVideo]} poster={videos[selectedVideo]?.image} >
        {/* <div className="selected-video__player">
            <img src={play} alt="" className="selected-video__player-play"/>
            <img src={scrub} alt="" className="selected-video__scrub" />
        </div> */}
        
        </video>
        </>
    );
}

export default SelectedVideo;