import './VideoUpload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import { useNavigate } from "react-router-dom"
import Button from '../../components/Button/Button';
import axios from 'axios';
import { v1 as uuidv1 } from 'uuid';

const url = 'http://localhost:8080/videos/';

const Submit_upload = (event) => {
  event.preventDefault();
  

  axios.post(url, {
    id: uuidv1(),
    title: event.target.title.value,
    channel: "Red Cow",
    image: "./images/image8.jpeg",
    description: event.target.description.value,
    views: 0,
    likes: 0,
    duration: "4:20",
    video:"https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: []
  }).then(response => {
  })
  window.location.href = "/";


}

function VideoUpload() {
  return (
    <div className="videoUpload">
      <h1 className="videoUpload__header">Upload Video</h1>
      <div>

      <h3 className="videoUpload__thumbnail-header">VIDEO THUMBNAIL</h3>
      <img className="videoUpload__thumbnail" src={thumbnail} alt="bike" />
      </div>
      <form onSubmit={Submit_upload} >
      <div className="videoUpload__input-fields">
      <div>
      <label htmlFor="title">TITLE YOUR VIDEO</label>
      <input className="videoUpload__title" type="text" placeholder="Add a title to your video" name="title" />
      </div>
      <div>
      <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
      <input className="videoUpload__desc" type="text" name="description" placeholder="Add a description to your video" />
      </div>
      </div>
      <input className="videoUpload__button" type="submit" value="PUBLISH" className="submit-button" />
      
      </form>
      <button className="cancel-button">Cancel</button>
      </div>
    
  )
}

export default VideoUpload