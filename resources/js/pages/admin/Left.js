import React from "react";
import "../../../scss/pages/admin/left.scss"
import Button from "../../components/ui/Button";
import {Link} from "react-router-dom";

const links = [
  {
    to: "/posts",
    label: "Посты"
  }
];

export default function Left() {

  return <div className="admin-left bg-dark">
    <div>

    </div>
    <div className="admin-left-links">
      {
        links.map(link => {

          return <Button className="admin-left-link" size="large" key={link.to} textAlign="left" color="dark">
            <p className="btn-text">
              {
                link.label
              }
            </p>
            <Link className="link" to={`/admin${link.to}`}/>
          </Button>
        })
      }
    </div>
  </div>
};