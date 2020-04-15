import React from "react";
import "./collection_preview_css.scss"

const Collection_preview = ({ title, items }) =>
{

    return (<div className="collectionPreview">
        <h1>{title}</h1>
        <div className="preview">

            {items.filter((item, idx) => idx < 4).map(item =>
            {
                return <div className="collection" key={item.id}>
                    <div className="collectionImage" style={{ backgroundImage: `url(${item.imageUrl})` }} />
                    <div className="collectionInfo" >
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                    </div>
                </div>
            })}
        </div>
    </div>)
}

export default Collection_preview