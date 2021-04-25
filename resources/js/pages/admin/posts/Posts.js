import React, {useEffect} from "react";
import Button from "../../../components/ui/Button";
import "../../../../scss/pages/admin/posts.scss";
import { Link } from "react-router-dom";
import {getPosts} from "../../../store/reducers/posts/actions";
import { connect } from "react-redux";
import Post from "./Post";

function Posts(props) {

  useEffect(() => {
    props.getPosts()
  }, [])
  return <div className="admin-posts">
    <Button className="bg-indigo-600 relative bg-hover-indigo-500 text-white admin-posts-create-link">
      Создать пост:)
      <Link to="/admin/posts/create" className="link"/>
    </Button>
    <div className="admin-posts-wrapper">
      {
        props.posts.map((post, idx) => {
          return <Post key={idx} post={post}/>
        })
      }
    </div>
  </div>
}

export default connect(
  state => {

    return {
      posts: state.posts
    }
  },
  {
    getPosts
  }
)(Posts)