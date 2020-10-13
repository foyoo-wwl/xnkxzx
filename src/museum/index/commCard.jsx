import React, { memo, useState, useEffect, Fragment } from "react";

import "./index.less";
import { axiosPost, axiosGet } from "./../../utils/axios";
import cookie from "react-cookies";
const Card = memo(props => {
    const {
        isVr,
        imgUrl,
        country,
        museum,
        joinNum,
        title,
        id,
        type,
        articleType,
        path,
        uid,
        isCollect,
    } = props;
    const [isCollectFlag, setIsCollect] = useState(false);
    const collect = () => {
        axiosPost(window.baseUrl + "/api/myaction", {
            type: 2,
            objectId: id,
            userId: uid,
        }).then(res => {
            setIsCollect(!isCollectFlag);
        });
    };
    useEffect(() => {
        if (parseInt(isCollect, 10) > 0) {
            setIsCollect(true);
        } else {
            setIsCollect(false);
        }
    }, []);
    const goPath = (id2, path2) => {
        axiosGet(
            window.baseUrl +
                "/api/myaction?type=2" +
                "&objectId=" +
                id2 +
                "&userId=" +
                cookie.load("uuid")
        ).then(res => {
            window.open(path2);
        });
    };
    return (
        <Fragment>
            {articleType === "4" ? (
                <div className="xnkjg_comm">
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
                    <div
                        className="xnkjg_text"
                        onClick={() => goPath(id, path)}
                    >
                        <span className="xnkjg_textL">{title}</span>
                        <span className="xnkjg_textR">{country}</span>
                    </div>
                    <div className="xnkjg_address" onClick={collect}>
                        <div className="xnkjg_addressL">
                            <img
                                src="./img/component/xnkjg/x_icon.png"
                                alt=""
                            />
                            <span>{joinNum}</span>
                        </div>
                        <div className="collect">
                            {isCollectFlag ? (
                                <svg
                                    t="1594290153620"
                                    className="icon"
                                    viewBox="0 0 1025 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="2092"
                                    width="32"
                                    height="32"
                                >
                                    <path
                                        d="M1024 384a103.04 103.04 0 0 0-72.32-64l-215.68-58.24L590.72 49.92A101.12 101.12 0 0 0 512 0a92.8 92.8 0 0 0-78.72 51.84l-120.32 192-161.28 49.28L72.96 320a97.28 97.28 0 0 0-68.48 56.96 115.2 115.2 0 0 0 19.84 97.28l140.8 178.56-7.68 256a117.76 117.76 0 0 0 17.92 88.96 64 64 0 0 0 49.92 21.12 181.76 181.76 0 0 0 60.8-13.44l208-84.48 236.16 87.68a141.44 141.44 0 0 0 42.88 7.68c29.44 0 78.72-13.44 82.56-103.68l-12.8-230.4 152.96-205.44A106.88 106.88 0 0 0 1024 384"
                                        p-id="2093"
                                        fill="#f4ea2a"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    t="1594290153620"
                                    className="icon"
                                    viewBox="0 0 1025 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="2092"
                                    width="32"
                                    height="32"
                                >
                                    <path
                                        d="M1024 384a103.04 103.04 0 0 0-72.32-64l-215.68-58.24L590.72 49.92A101.12 101.12 0 0 0 512 0a92.8 92.8 0 0 0-78.72 51.84l-120.32 192-161.28 49.28L72.96 320a97.28 97.28 0 0 0-68.48 56.96 115.2 115.2 0 0 0 19.84 97.28l140.8 178.56-7.68 256a117.76 117.76 0 0 0 17.92 88.96 64 64 0 0 0 49.92 21.12 181.76 181.76 0 0 0 60.8-13.44l208-84.48 236.16 87.68a141.44 141.44 0 0 0 42.88 7.68c29.44 0 78.72-13.44 82.56-103.68l-12.8-230.4 152.96-205.44A106.88 106.88 0 0 0 1024 384"
                                        p-id="2093"
                                        fill="#e6e6e6"
                                    ></path>
                                </svg>
                            )}
                        </div>
                        <div className="xnkjg_addressR">{museum}</div>
                    </div>
                </div>
            ) : (
                <a
                    className="xnkjg_comm"
                    href={"/content.html?type=1&id=" + id + "&action=" + type}
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

export default Card;
