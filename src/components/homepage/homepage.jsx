import React from "react";
import "./homepage_css.scss";
import { useHistory } from "react-router-dom";
import Secondcontainer from "../middlesection/secondcontainer_components"

const Homepage = (props) =>
{
  let history = useHistory()
  return (
    <div id={props.id} onClick={() => { history.push("/" + props.link) }} style={{
      backgroundImage: `url(${props.image})`
    }} className={`${props.size} main_container`}>
      <Secondcontainer title={props.name} size={props.size} image={props.image} />
    </div>
  );
};

export default Homepage;
