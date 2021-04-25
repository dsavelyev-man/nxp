import React from "react";

export default function PostHeading(props) {
  return <h3 className="post-component-heading">
    {
      props.data.data.text
    }
  </h3>
}