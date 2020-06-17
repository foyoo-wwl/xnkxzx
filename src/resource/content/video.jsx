import React, { memo, useEffect } from "react";
import axios from "axios";
import "./../mock/detail_1.js";
import { Breadcrumb } from "antd";
import "./index.less";
import Player from "griffith";

const VideoDetail = memo(() => {
    useEffect(() => {
        axios
            .get("/resource/content/detail1")
            .then(res => {
                console.log(JSON.stringify(res.data.data));
            })
            .catch(err => {});
    }, []);
    const sources = {
        hd: {
            play_url:
                "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4",
        },
        sd: {
            play_url:
                "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4",
        },
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
                        <Player sources={sources} />
                    </div>
                    <div className="tags">
                        <span className="tag">2018年全国科普微视频大赛</span>
                        <span className="tag">肾脏</span>
                        <span className="tag">健康</span>
                    </div>
                </div>
                <div className="videoDown">
                    <div className="h1">视频信息</div>
                    <div className="detailContent">
                        <div className="title">
                            2018年全国科普微视频大赛获奖作品
                        </div>
                        <div className="desc">
                            从风云1号到风云3号，从风云2号到风云4号，我国已经累计发射了17颗风云气象卫星，成为世界上第三个同时拥有极轨气象卫星和静止气象卫星的国家。在我国气象卫星历经风云60年探索历程之际，本视频带你走近风云气象卫星大家族，探索国家气象卫星60年发展风云路。
                        </div>
                    </div>
                    <div className="downBtn">视频下载</div>
                </div>
            </div>
        </div>
    );
});

export default VideoDetail;
