import React from "react";
import SHOP_DATA from "./shoppage.collection"
import Collection_preview from "../../components/collection_preview/collection_preview"
import "./shoppage_collection_css.scss"
class Shoppage extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = { collections: SHOP_DATA }
    }

    render()
    {
        return (<div className="shopcollection">
            {
                this.state.collections.map(collection =>
                {
                    return (< Collection_preview key={collection.id} {...collection} />)
                })}

        </div >)
    }
}

export default Shoppage