/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, Fragment } from "react";

import "./common.less";
const XnkjgCard = memo(props => {
    const {
        title,
        link,
        imgUrl,
        country,
        museum,
        joinNum,
        isVr,
        id,
        type,
        articleType,
        path,
        goPath,
    } = props;
    return (
        <Fragment>
            {articleType === "4" ? (
                <div className="xnkjg_comm" onClick={() => goPath(id, path)}>
                    <div className="xnkjg_img">
                        <img src={imgUrl} alt="" />
                        {isVr === "VR" && (
                            <div className="xnkjg_imgIcon">
                                <img
                                    src="./img/component/xnkjg/vr.png"
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    <div className="xnkjg_text">
                        <span className="xnkjg_textL">{title}</span>
                        <span className="xnkjg_textR">{country}</span>
                    </div>
                    <div className="xnkjg_address">
                        <div className="xnkjg_addressL">
                            <img
                                src="./img/component/xnkjg/x_icon.png"
                                alt=""
                            />
                            <span>{joinNum}</span>
                        </div>
                        <div className="xnkjg_addressR">{museum}</div>
                    </div>
                </div>
            ) : (
                <a
                    className="xnkjg_comm"
                    href={"/content.html?type=1&id=" + id + "&type=" + type}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="xnkjg_img">
                        <img src={imgUrl} alt="" />
                        {isVr === "VR" && (
                            <div className="xnkjg_imgIcon">
                                <img
                                    src="./img/component/xnkjg/vr.png"
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    <div className="xnkjg_text">
                        <span className="xnkjg_textL">{title}</span>
                        <span className="xnkjg_textR">{country}</span>
                    </div>
                    <div className="xnkjg_address">
                        <div className="xnkjg_addressL">
                            <img
                                src="./img/component/xnkjg/x_icon.png"
                                alt=""
                            />
                            <span>{joinNum}</span>
                        </div>
                        <div className="xnkjg_addressR">{museum}</div>
                    </div>
                </a>
            )}
        </Fragment>
    );
});

export default XnkjgCard;
