/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import "./../mock/detail_2.js";
import { Breadcrumb, Skeleton, Modal, Checkbox, Button, message } from "antd";
import "./index.less";
import Player from "griffith";
import { axiosGet, axiosPost } from "./../../utils/axios";
import cookie from "react-cookies";
import getTime from "./../../utils/getTime";
const VideoDetailList = memo(props => {
    const [videoArr, setVideoArr] = useState([]);
    const [videoIndex, setVideoIndex] = useState(0);
    const [props3, setProps3] = useState({});
    const [playFlag, setPlayFlag] = useState(true);
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "学生专区", "详情"],
        downBtn: "继续下载",
        downloadTitle: "Copyright Notice",
        source: "来源",
        msg: "请同意《资源使用协议》",
        video: "相关视频",
    });
    const [language, setLanguage] = useState("zh_CN");
    const [modalFlag, setModalFlag] = useState(false);
    const [downLink, setDownLink] = useState("");
    const [checkFlag, setCheckFlag] = useState(false);
    useEffect(() => {
        // axiosGet(
        //     window.baseUrl +
        //         "/api/myaction?type=7&objectId=" +
        //         props.match.params.id +
        //         "&userId=" +
        //         cookie.load("uuid")
        // ).then(res => {});
        let lang = "en";
        if (cookie.load("_locale") === "en") {
            lang = "en";
        } else {
            lang = "zh";
        }
        axiosGet(
            window.baseUrl +
                "/api/video?videoid=" +
                props.match.params.id +
                "&uid=" +
                cookie.load("uuid") +
                "&lang=" +
                lang
        ).then(res => {
            setDownLink(window.baseUrl + res[0].videoUrl);
            setVideoArr(res);
            axiosGet(
                window.baseUrl +
                    "/api/myaction?type=7&objectId=" +
                    res[0].id +
                    "&userId=" +
                    cookie.load("uuid")
            ).then(res2 => {});
            const sources = {
                hd: {
                    bitrate: 2005,
                    size: 46723282,
                    duration: 1200,
                    format: "mp4",
                    width: 752,
                    height: 260,
                    play_url: window.baseUrl + res[videoIndex].videoUrl,
                },
            };
            const props2 = {
                id: "123",
                standalone: false,
                title: "title",
                cover: res[videoIndex].poster,
                duration: 123,
                sources,
                autoplay: false,
                shouldObserveResize: false,
            };
            setProps3(props2);
        });
    }, []);
    const tabVideo = (index, id) => {
        axiosGet(
            window.baseUrl +
                "/api/myaction?type=7&objectId=" +
                id +
                "&userId=" +
                cookie.load("uuid")
        ).then(res => {});
        setPlayFlag(false);
        const sources = {
            hd: {
                bitrate: 2005,
                size: 46723282,
                duration: 1200,
                format: "mp4",
                width: 752,
                height: 260,
                play_url: window.baseUrl + videoArr[index].videoUrl,
            },
        };
        const props2 = {
            id: "123",
            standalone: false,
            title: "title",
            cover: videoArr[index].poster,
            duration: 123,
            sources,
            autoplay: false,
            shouldObserveResize: false,
        };
        setProps3(props2);
        setVideoIndex(index);
        setTimeout(() => {
            setPlayFlag(true);
        }, 100);
    };
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setLanguage("en");
            setTitleArr({
                breadCrumb: ["home", "Resources", "details"],
                downBtn: "Continue to download",
                downloadTitle: "Copyright Notice",
                source: "Source",
                msg:
                    'You must agree to the "Information Resources Usage Agreement"',
                video: "videos",
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
            message.info(titleArr.msg);
        }
    };
    const modalDown = link => {
        setDownLink(link);
        setModalFlag(true);
    };
    const collectStart = (index, id) => {
        axiosPost(window.baseUrl + "/api/myaction", {
            type: 7,
            objectId: id,
            userId: cookie.load("uuid"),
        }).then(res => {
            if (res) {
                // if (_videoArr[index - 1].isCollect > 0) {
                //     _videoArr[index - 1].isCollect = 0;
                //     message.info("Cancel collection");
                // } else {
                //     _videoArr[index - 1].isCollect = 1;
                //     message.info("collect");
                // }
                // setVideoArr(_videoArr);
                axiosGet(
                    window.baseUrl +
                        "/api/video?videoid=" +
                        props.match.params.id +
                        "&uid=" +
                        cookie.load("uuid") +
                        "&lang=" +
                        lang
                ).then(res2 => {
                    setDownLink(window.baseUrl + res2[0].videoUrl);
                    setVideoArr(res2);
                    const sources = {
                        hd: {
                            bitrate: 2005,
                            size: 46723282,
                            duration: 1200,
                            format: "mp4",
                            width: 752,
                            height: 260,
                            play_url:
                                window.baseUrl + res2[videoIndex].videoUrl,
                        },
                    };
                    const props2 = {
                        id: "123",
                        standalone: false,
                        title: "title",
                        cover: res2[videoIndex].poster,
                        duration: 123,
                        sources,
                        autoplay: false,
                        shouldObserveResize: false,
                    };
                    setProps3(props2);
                });
            }
        });
    };
    const getlink = name => {
        if (name === "科教课程" || name === "Science Courses") {
            return "/resource.html";
        }
        return "/resource.html#/kpbg";
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
                    <Breadcrumb.Item>
                        {videoArr.length && (
                            <a href={getlink(videoArr[0].cattitle)}>
                                {videoArr[0].cattitle}
                            </a>
                        )}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {videoArr.length && videoArr[0].title}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {videoArr.length ? (
                <div className="video_content">
                    <div className="videoSec">
                        <div className="title">
                            {videoArr[videoIndex].title}
                        </div>
                        <div className="sourceSec">
                            <div className="source">
                                {titleArr.source}:{videoArr[videoIndex].source}
                            </div>
                            <div className="time">
                                {/* {new Date(
                                    videoArr[videoIndex].time * 1000
                                ).getFullYear()}
                                -
                                {new Date(
                                    videoArr[videoIndex].time * 1000
                                ).getMonth()}
                                -
                                {new Date(
                                    videoArr[videoIndex].time * 1000
                                ).getDate()}
                                &nbsp;
                                {new Date(
                                    videoArr[videoIndex].time * 1000
                                ).getHours()}
                                :
                                {new Date(
                                    videoArr[videoIndex].time * 1000
                                ).getMinutes()} */}
                                {getTime(videoArr[videoIndex])}
                            </div>
                        </div>
                        <div className="player">
                            {playFlag && props3.id && <Player {...props3} />}
                        </div>
                        <div className="tags">
                            {videoArr[videoIndex].tag &&
                                videoArr[videoIndex].tag.length > 0 &&
                                videoArr[videoIndex].tag.map(item => {
                                    return (
                                        <span className="tag" key={item}>
                                            {item}
                                        </span>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="videoDown">
                        <div className="h1">{titleArr.video}</div>
                        <div className="videoList">
                            {videoArr.length &&
                                videoArr.map((item, index) => {
                                    return (
                                        <div
                                            key={item.time}
                                            className="videoLink"
                                            onClick={() =>
                                                tabVideo(index, item.id)
                                            }
                                        >
                                            <span>{item.title}</span>
                                            <div
                                                className="a"
                                                onClick={() =>
                                                    modalDown(
                                                        window.baseUrl +
                                                            item.videoUrl
                                                    )
                                                }
                                            >
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
                                            <div
                                                className="a"
                                                onClick={() =>
                                                    collectStart(index, item.id)
                                                }
                                            >
                                                {item.isCollect > 0 ? (
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
                                            {/* <svg t="1594290153620" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2092" width="32" height="32"><path d="M1024 384a103.04 103.04 0 0 0-72.32-64l-215.68-58.24L590.72 49.92A101.12 101.12 0 0 0 512 0a92.8 92.8 0 0 0-78.72 51.84l-120.32 192-161.28 49.28L72.96 320a97.28 97.28 0 0 0-68.48 56.96 115.2 115.2 0 0 0 19.84 97.28l140.8 178.56-7.68 256a117.76 117.76 0 0 0 17.92 88.96 64 64 0 0 0 49.92 21.12 181.76 181.76 0 0 0 60.8-13.44l208-84.48 236.16 87.68a141.44 141.44 0 0 0 42.88 7.68c29.44 0 78.72-13.44 82.56-103.68l-12.8-230.4 152.96-205.44A106.88 106.88 0 0 0 1024 384" p-id="2093" fill="#f4ea2a"></path></svg> */}
                                        </div>
                                    );
                                })}
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
                        I agree
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

export default VideoDetailList;
