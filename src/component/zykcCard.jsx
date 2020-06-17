/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";

import "./common.less";
const ZykcCard = memo(props => {
    const {
        title,
        link,
        imgUrl,
        joinNum,
        comment,
        id,
        star,
        isHot,
        isRecommended,
        isLatest,
    } = props;
    return (
        <a className="zykc_comm" href={link}>
            <div className="zykc_img">
                <img src="./img/component/zykc/zykc_.png" alt="" />
                {isHot ? (
                    <div className="zykc_bar bar3">Hot</div>
                ) : isRecommended ? (
                    <div className="zykc_bar bar1">推荐</div>
                ) : (
                    <div className="zykc_bar bar2">最新</div>
                )}
            </div>
            <div className="zykc_name">{title}</div>
            <div className="zykc_read">
                <img src="./img/component/zykc/x_icon.png" alt="" />
                <span>{joinNum}</span>
            </div>
            <div className="zykc_evaluate">
                <div
                    className="evaluate_x"
                    style={{ backgroundPosition: `left ${star * 40 - 200}px` }}
                ></div>
                <div className="evaluate_num">
                    {star}
                    {comment}人评价
                </div>
            </div>
        </a>
    );
});
export default ZykcCard;
