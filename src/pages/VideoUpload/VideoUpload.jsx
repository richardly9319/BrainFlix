import './VideoUpload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'

function VideoUpload() {
  return (
    <div className="videoUpload">
      <h1 className="videoUpload__header">Upload Video</h1>
      <h3 className="videoUpload__thumbnail-header">VIDEO THUMBNAIL</h3>
      <img className="videoUpload__thumbnail" src={thumbnail} alt="" />
      <h3>TITLE YOUR VIDEO</h3>
      <input type="text" placeholder="Add a title to your video" />
      <h3>ADD A VIDEO DESCRIPTION</h3>
      <input type="text" placeholder="Add a description to your video" />
      <button className="button">PUBLISH</button>
      <button>Cancel</button>
      </div>
    
  )
}

export default VideoUpload