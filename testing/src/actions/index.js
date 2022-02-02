import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export async function fetchComments() {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  );

  // console.log(response.data);
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
}
