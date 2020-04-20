import React from "react";
import "./collection_preview_css.scss"
import { connect } from 'react-redux'
import {addItems} from "../../redux/action"
const Collection_preview = ({ title, items,dispatch }) =>
{   

    return (<div className="collectionPreview">
        <h1>{title}</h1>
        <div className="preview">

            {items.filter((item, idx) => idx < 4).map(item =>
            {
                return <div className="collection" key={item.id}>
                    <div className="collectionImage" style={{ backgroundImage: `url(${item.imageUrl})` }} >
                    <div className = "add_to_cart" onClick = {()=>{ dispatch(item) }}  >Add To Cart</div>
                    </div>
                    <div className="collectionInfo" >
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                    </div>
                </div>
            })}
        </div>
    </div>)
}


const mapDispatchToProps = dispatch =>
{
  return {
    dispatch: (data) => dispatch(addItems(data))
  }
}

export default connect(null,mapDispatchToProps)(Collection_preview)