import React from "react";
import Homepage from "../../components/homepage/homepage.jsx";

class Homepages extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="mainDiv">
                {this.props.parameter.map(x =>
                {
                    return (
                        <Homepage
                            key={x.id}
                            name={x.title} size={x.size}
                            image={x.imageUrl}
                            link={x.linkUrl}
                        />
                    );
                })}
            </div>
        )
    }


}

export default Homepages