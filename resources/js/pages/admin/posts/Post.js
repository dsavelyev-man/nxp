import React from "react";
import "../../../../scss/components/post.scss";
import PostHeading from "./PostHeading";

export default function Post(props) {
  return <div className="post">
    <h2 className="post-heading">
      {
        props.post.heading
      }
    </h2>
    {
      props.post.content.map(component => {

        switch (component.type) {
          case "heading":
            return <PostHeading key={component.id} data={component}/>
            break
        }
      })
    }
  </div>
}