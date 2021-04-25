import React from "react"
import Button from "../../../components/ui/Button";
import {data} from "autoprefixer";

export default function Heading(props) {

  return <div className="admin-posts-heading-input">
    <input
      type="text"
      onChange={(e) => {
        let customData = props.data[0];
        customData[props.element.id].data.text = e.target.value;
        props.data[1](customData)
      }}
      placeholder="Заголовок"
    />
    <Button
      color="danger"
      onClick={() => {
        let customData = props.data[0].filter(element => element.id !== props.element.id);
        props.data[1](customData)
      }}
    >
      Удалить
    </Button>
  </div>
}