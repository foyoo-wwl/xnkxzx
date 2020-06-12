import React, { memo } from "react";

import "./index.less";
const Card = memo(props => {
    const { time, imgUrl, abstract, museum, title } = props;
    return (
        <div className="card">
            <div className="imgWrap">{imgUrl}</div>
            <div className="cardContent">
                <div className="h1">
                    {title}=={abstract}
                </div>
                <div className="h1">
                    {museum}=={time}
                </div>
            </div>
        </div>
    );
});

export default Card;
