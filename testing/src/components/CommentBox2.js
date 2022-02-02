import { fetchComments } from "actions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { saveComment } from "actions";

function CommentBox2() {
  const [comment, setComment] = useState();
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveComment(comment));
  };

  const handleFetch = () => {
    // fetchComments();
    dispatch(fetchComments());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={handleFetch}>
        Fetch Comments
      </button>
    </div>
  );
}

export default CommentBox2;
