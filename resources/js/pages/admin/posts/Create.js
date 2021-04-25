import React, {useState} from "react";
import Button from "../../../components/ui/Button";
import Heading from "./Heading";
import {RequestCreatePost} from "../../../requests";

export default function Create() {
  const data = useState([]);
  const heading = useState("");

  return <div className="admin-posts-create">
    <div className="bg-dark admin-posts-editor">
      <input
        className="admin-posts-input-heading"
        type="text"
        onChange={(e) => {
          heading[1](e.target.value)
        }}
        placeholder="Заговолок"
      />
      <div className="admin-posts-create-content">
        <div className="admin-posts-variants">
          <Button
            onClick={() => {
              data[1]([...data[0],  {
                id: data[0].length,
                type: "heading",
                data: {
                  color: "white",
                  text: "",
                }
              }])
            }}
            color="primary"
          >
            Заголовок
          </Button>
          <Button
            color="primary"
          >
            Изображение
          </Button>
        </div>
        <div>
          {
            data[0].map(element => {
              switch (element.type) {
                case "heading":
                  return <Heading data={data} key={element.id} element={element}/>
                  break
              }
            })
          }
        </div>
        <Button
          color="success"
          onClick={() => {
            RequestCreatePost({
              heading: heading[0],
              content: data[0]
            })
          }}
        >
          Создать
        </Button>
      </div>
    </div>
  </div>
}