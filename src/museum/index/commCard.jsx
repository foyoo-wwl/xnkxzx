import React, { memo, useState, useEffect } from "react";

import "./index.less";
const Card = memo(props => {
    const { isVr, imgUrl, country, museum, joinNum, title } = props;
    return (
        <a className="xnkjg_comm" href="demo">
            <div className="xnkjg_img">
                <img src="./img/component/xnkjg/xnkjg_banner.png" alt="" />
                <div className="xnkjg_imgIcon">
                    <img src="./img/component/xnkjg/vr.png" alt="" />
                </div>
            </div>
            <div className="xnkjg_text">
                <span className="xnkjg_textL">{title}</span>
                <span className="xnkjg_textR">{country}</span>
            </div>
            <div className="xnkjg_address">
                <div className="xnkjg_addressL">
                    <img src="./img/component/xnkjg/x_icon.png" alt="" />
                    <span>{joinNum}</span>
                </div>
                <div className="xnkjg_addressR">{museum}</div>
            </div>
        </a>
    );
});

export default Card;
