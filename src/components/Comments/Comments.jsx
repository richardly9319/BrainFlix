import userImage from '../../assets/Images/Mohan-muruge.jpg';
import './Comments.scss';
import Button from '../Button/Button';
import commentIcon from '../../assets/Icons/add_comment.svg';
import CommentList from '../CommentList/CommentList';

function Comments({ videoDetails, selectedVideoDetails }) {
    let comment_count = selectedVideoDetails?.comments?.length;


    return (

        
      <div className="comments">
        <h2 className="comments__header">{comment_count} Comments</h2>
        <div className="user-input">
            <img className="user-input__image" src={userImage} alt="" />
            <div className="user-input__content">
                <label htmlFor="user-input">JOIN THE CONVERSATION</label>
                <div className="user-input__input-and-button">
                <input className="user-input__input" type="text" name="user-input" placeholder="Add a new comment"/>
                <Button visibility="3" icon={commentIcon} text="Comment" /> 
                </div>
            </div>
        </div>

        <CommentList selectedVideoDetails={selectedVideoDetails}/>
      </div>
    );
  }
  
  export default Comments;