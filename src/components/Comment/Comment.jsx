import './Comment.scss';

function Comment({ comment }) {
    return (
      <div className="Comment">
        <img className="Comment__image" />
        <div className="Comment__text">
            <div className="Comment__name-date">
                <h2 className="Comment__name">{comment.name}</h2>
                <p className="Comment__date">{comment.timestamp}</p>
            </div>
            <p className="Comment__content">{comment.comment}</p>
        </div>
      </div>
    );
  }
  
  export default Comment;