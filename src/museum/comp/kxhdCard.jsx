import React, { memo, useState, useEffect } from "react";

import "./index.less";
const Card = memo(props => {
    const { title, imgUrl, no, museum, country, abstract, link, id } = props;
    return (
        <div className="kxhdal_comm">
            <div className="kxhdal_img">
                <img src="./img/component/kxhdal/kxhdal_banner.png" alt="" />
            </div>
            <div className="kxhdal_G">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="kxhdal_Gtext">{no}</div>
            </div>
            <div className="kxhdal_mask">
                <div className="kxhdal_mask_nav">
                    <div className="kxhdal_txt">{title}</div>
                    <div className="kxhdal_address">
                        <span className="country">{country}</span>
                        <span className="nation">{museum}</span>
                    </div>
                    <div className="kxhdal_mask_content">
                        <span>{abstract}</span>
                        <a href={"./content.html?type=2&id=" + id} alt={title}>
                            更多
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Card;
