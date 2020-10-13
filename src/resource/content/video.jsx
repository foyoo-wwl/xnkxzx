import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import "./../mock/detail_1.js";
import { Breadcrumb, Skeleton, Modal, Checkbox, Button, message } from "antd";
import "./index.less";
import Player from "griffith";
import { axiosPost } from "./../../utils/axios";
import cookie from "react-cookies";
const VideoDetail = memo(props => {
    const [videoArr, setVideoArr] = useState({});
    const [currentTime, setCurrentTime] = useState(0);
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "科教资源", "详情"],
        downBtn: "继续下载",
        downloadTitle: "Copyright Notice",
    });
    const [language, setLanguage] = useState("zh_CN");
    const [modalFlag, setModalFlag] = useState(false);
    const [downLink, setDownLink] = useState("");
    const [checkFlag, setCheckFlag] = useState(false);
    useEffect(() => {
        axiosPost(window.baseUrl + "/api/video", {
            videoid: props.match.params.id,
        }).then(res => {
            setVideoArr(res);
            const time = new Date(res.time * 1000)
                .toLocaleString()
                .replace(/:\d{1,2}$/, " ");
            setCurrentTime(time);
        });
    }, []);
    const sources = {
        hd: {
            bitrate: 2005,
            size: 46723282,
            duration: 1200,
            format: "mp4",
            width: 752,
            height: 260,
            play_url:
                "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4",
        },
    };
    const props2 = {
        id: "123",
        standalone: false,
        title: "title",
        cover: "cover",
        duration: 123,
        sources,
        autoplay: false,
        shouldObserveResize: false,
        src: window.baseUrl + videoArr.poster,
    };
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setLanguage("en");
            setTitleArr({
                breadCrumb: ["home", "Resources", "details"],
                downBtn: "Continue to download",
                downloadTitle: "Copyright Notice",
            });
        }
    }, []);
    const onChange = e => {
        setCheckFlag(e.target.checked);
    };
    const downVideo = () => {
        if (checkFlag) {
            console.log(downLink);
            const aLink = document.createElement("a");
            document.body.appendChild(aLink);
            aLink.style.display = "none";
            aLink.href = downLink;
            aLink.target = "_blank";
            aLink.click();
            document.body.removeChild(aLink);
            setModalFlag(false);
            setCheckFlag(false);
        } else {
            message.info("请同意《资源使用协议》");
        }
    };
    const modalDown = link => {
        setDownLink(link);
        setModalFlag(true);
    };
    return (
        <div className="videoDetailWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">{titleArr.breadCrumb[0]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/resource.html">{titleArr.breadCrumb[1]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{titleArr.breadCrumb[2]}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {videoArr.time ? (
                <div className="video_content">
                    <div className="videoSec">
                        <div className="title">{videoArr.title}</div>
                        <div className="sourceSec">
                            <div className="source">
                                来源：{videoArr.source}
                            </div>
                            <div className="time">{currentTime}</div>
                        </div>
                        <div className="player">
                            <Player {...props2} />
                        </div>
                        <div className="tags">
                            {videoArr.tag &&
                                videoArr.tag.length > 0 &&
                                videoArr.tag.map(item => {
                                    return (
                                        <span className="tag" key={item}>
                                            {item}
                                        </span>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="videoDown">
                        <div className="h1">视频信息</div>
                        <div className="detailContent">
                            <div className="title">{videoArr.title}</div>
                            <div className="desc">{videoArr.abstract}</div>
                        </div>
                        <div className="downAndCollect">
                            <div
                                className="downBtn"
                                onClick={() =>
                                    modalDown(
                                        window.baseUrl + videoArr.videoUrl
                                    )
                                }
                            >
                                视频下载
                            </div>
                            <div className="collect">
                                <svg
                                    t="1594099473273"
                                    className="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="2116"
                                    width="32"
                                    height="32"
                                >
                                    <path
                                        d="M937.8 893.9H88.2c-12.5 0-24.5-5-33.4-13.8C46 871.2 41 859.2 41 846.7V327.5c0-12.5 5-24.5 13.8-33.4 8.9-8.9 20.9-13.8 33.4-13.8h94.4c26.1 0 47.2 21.1 47.2 47.2s-21.1 47.2-47.2 47.2h-47.2v424.8h755.2V374.7h-47.2c-26.1 0-47.2-21.1-47.2-47.2s21.1-47.2 47.2-47.2h94.4c12.5 0 24.5 5 33.4 13.8C980 303 985 315 985 327.5v519.2c0 12.5-5 24.5-13.8 33.4-8.9 8.8-20.9 13.8-33.4 13.8z m-472-349.3V185.9c0-26.1 21.1-47.2 47.2-47.2s47.2 21.1 47.2 47.2v357.8l60.4-60.4c18.7-16 46.6-15 64.1 2.5 17.4 17.4 18.5 45.3 2.5 64.1L550.8 686.2c-8.9 11.9-22.9 18.9-37.8 18.9-12.5 0.1-24.6-4.9-33.5-13.7L337.9 549.8c-16-18.7-15-46.6 2.5-64.1 17.4-17.4 45.4-18.5 64.1-2.5l61.3 61.4z m0 0"
                                        fill="#1296DB"
                                        p-id="2117"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Skeleton active />
            )}
            <Modal
                title={titleArr.downloadTitle}
                visible={modalFlag}
                onCancel={() => setModalFlag(false)}
                footer={null}
            >
                <p> ©2020 Children and Youth Science Center of CAST</p>
                <p>All rights reserved. First Edition 2020. Copyright Notice</p>
                <p>
                    The copyright of this module is owned by Children & Youth
                    Science Center of CAST and only non-exclusive use for
                    non-commercial purposes can be allowed. Deprivative works
                    should be permitted by Children & Youth Science Center of
                    CAST. Any enquiry for further cooperation, please
                    contact yangfeng@cast.org.cn.
                </p>
                <div className="checkWrap">
                    <Checkbox onChange={onChange} checked={checkFlag}>
                        我同意<a>《资源使用协议》</a>
                    </Checkbox>
                </div>
                <div className="buttonWrap">
                    <Button type="primary" onClick={downVideo}>
                        {titleArr.downBtn}
                    </Button>
                </div>
            </Modal>
        </div>
    );
});

export default VideoDetail;
