import React from "react";
import join from "lodash/join";
import "../../../scss/ui/button.scss";

export default function Button(props) {
  const classNames = ["btn"];
  let onClick = null;

  if(props.className) {
    classNames.push(props.className)
  }

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

  if(props.textAlign) {
    classNames.push(`flex-justify-${props.textAlign}`)
  } else {
    classNames.push(`flex-justify-center`)
  }

  if(props.onClick) {
    onClick = props.onClick
  }

  return <button onClick={onClick} className={join(classNames, " ")}>
    {
      props.children
    }
  </button>
}