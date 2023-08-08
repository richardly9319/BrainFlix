import './VideoUpload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import { useNavigate } from "react-router-dom"
import Button from '../../components/Button/Button';

const Submit_upload = (event) => {
  event.preventDefault();
  // const navigate = useNavigate();
  alert('Uploaded');
  // navigate("/");
  window.location.href = "/";


}

function VideoUpload() {
  return (
    <div className="videoUpload">
      <h1 className="videoUpload__header">Upload Video</h1>
      <h3 className="videoUpload__thumbnail-header">VIDEO THUMBNAIL</h3>
      <img className="videoUpload__thumbnail" src={thumbnail} alt="bike" />
      <form onSubmit={Submit_upload} >
      <label htmlFor="title">TITLE YOUR VIDEO</label>
      <input type="text" placeholder="Add a title to your video" name="title" />
      <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
      <input type="text" name="description" placeholder="Add a description to your video" />
      <input type="submit" value="PUBLISH" className="submit-button" />
      </form>
      <button className="cancel-button">Cancel</button>
      </div>
    
  )
}

export default VideoUpload