import { fetchComments } from "actions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { saveComment } from "actions";
import { useNavigate } from "react-router-dom";

function CommentBox2() {
  const [comment, setComment] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);

  console.log(authState);

  useEffect(() => {
    if (!authState) {
      navigate("/");
    }
  }, [authState]);

  const navAway = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveComment(comment));
  };

  const handleFetch = () => {
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
