import React, { memo, useState, useEffect } from "react";

import "./index.less";
const KjzxCard = memo(props => {
    const { no, imgUrl, country, museum, abstract, title } = props;
    return (
        <div className="kjzxCard">
            <div className="imgWrap">{imgUrl} </div>
            <div>
                <span>{title}</span>
                <span>{no}</span>
            </div>
            <div>
                <span>{museum}</span>
                <span>{country}</span>
            </div>
            <h2>{abstract}</h2>
        </div>
    );
});

export default KjzxCard;
