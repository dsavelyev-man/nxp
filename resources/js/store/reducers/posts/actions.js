import {RequestGetPosts} from "../../../requests";

export function getPosts() {

  return function (dispatch) {
    RequestGetPosts().then((r) => {
      dispatch({
        type: "GET_POSTS",
        payload: r.data
      })
    })
  }
}