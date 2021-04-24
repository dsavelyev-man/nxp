import React from "react";
import join from "lodash/join";
import "../../../scss/ui/button.scss";

export default function Button(props) {
  const classNames = ["btn"]

  if(props.color) {
    if(!props.outline) {
      classNames.push(`btn-${props.color}`)
    } else {
      classNames.push(`btn-outline-${props.color}`)
    }
  }

  if(props.size) {
    classNames.push(`btn-${props.size}`)
  }

  if(props.disabled) {
    classNames.push(`btn-disabled`)
  }

  return <button className={join(classNames, " ")}>
    {
      props.children
    }
  </button>
}