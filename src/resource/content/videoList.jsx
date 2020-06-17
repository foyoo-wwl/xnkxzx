import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import "./../mock/detail_2.js";
import { Breadcrumb } from "antd";
import "./index.less";
import Player from "griffith";

const VideoDetailList = memo(() => {
    const [videoArr, setVideoArr] = useState({});
    useEffect(() => {
        axios
            .get("/resource/content/detaillist")
            .then(res => {
                setVideoArr(res.data.data);
                console.log(JSON.stringify(res.data.data));
            })
            .catch(err => {});
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
        src:
            "http://filecloud.kepu.gov.cn/kepufile/sowingmap/Px5PnshfwjRZCHc2DNGPE6xsS4wwenFn.png?x-oss-process=style/kepu",
    };
    return (
        <div className="videoDetailWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">首页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/resource.html">科教资源</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>儿童在线学习资源</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="video_content">
                <div className="videoSec">
                    <div className="title">
                        神秘的肾脏（2018年全国科普微视频大赛获奖作品）
                    </div>
                    <div className="sourceSec">
                        <div className="source">
                            来源：复旦大学附属中山医院肾内科
                        </div>
                        <div className="time">2019-07-15 16:40</div>
                    </div>
                    <div className="player">
                        <Player {...props2} />
                    </div>
                    <div className="tags">
                        <span className="tag">2018年全国科普微视频大赛</span>
                        <span className="tag">肾脏</span>
                        <span className="tag">健康</span>
                    </div>
                </div>
                <div className="videoDown">
                    <div className="h1">相关新闻</div>
                    <div className="videoList">
                        {videoArr.list &&
                            videoArr.list.map(item => {
                                return (
                                    <div
                                        key={item.videoId}
                                        className="videoLink"
                                    >
                                        {item.videoName}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default VideoDetailList;
