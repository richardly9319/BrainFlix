import Comment from "../Comment/Comment";

function CommentList({ selectedVideoDetails }) {
    
    let commentList = selectedVideoDetails?.comments?.map((comment) => {
        return <Comment comment={comment} />
    })

  

  return (
    <div className="CommentList">
      {commentList}
    </div>
  );
  }

export default CommentList;