import React from "react"
import "./secondcontainer_component.scss"
const Secondcontainer = (props) => {
    return (<div className="second_container">
        <div id={props.id} className="third-container">
            <h1>{props.title}</h1>
            <span>Shop Now</span>
        </div>
    </div>)
}

export default Secondcontainer