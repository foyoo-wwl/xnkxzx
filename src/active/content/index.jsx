/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback, Fragment } from "react";
import axios from "axios";

import { AudioOutlined } from "@ant-design/icons";
import { Pagination, Breadcrumb, Input } from "antd";
import Vote from "./../comp/vote";
import "./index.less";

import "../mock/activeDetailMock";
import "../mock/voteMock";

import ZykcCard from "./../../component/zykcCard";

const Detail = memo(props => {
    const [detailArr, setDetailArr] = useState({});
    const [voteArr, setVoteArr] = useState({});
    useEffect(() => {
        //console.log(props.match.params.id);
        axios
            .get("/active/detail")
            .then(res => {
                setDetailArr(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        //console.log(props.match.params.id);
        axios
            .get("/active/vote")
            .then(res => {
                setVoteArr(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const { Search } = Input;
    const searchKeyWord = value => {
        console.log(value);
    };
    return (
        <div className="detailWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">首页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/active.html">主题活动</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>活动详情</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {detailArr.banner && (
                <Fragment>
                    <div className="hdxq_navbar">
                        <div className="h_barL">
                            <img src="./img/component/active/wqhd.png" alt="" />
                            <div className="barL_mask">
                                <div className="barnL_ico">
                                    {detailArr.banner.state}
                                </div>
                                <div className="barnL_text">
                                    {detailArr.banner.time}
                                </div>
                            </div>
                        </div>
                        <div className="h_barR">
                            <p className="barR_title">
                                {detailArr.banner.bannerTitle}
                            </p>
                            <div className="barR_content">
                                {detailArr.banner.abstract}
                            </div>
                            <div className="barR_btn">
                                <a href={detailArr.banner.path}>立即加入</a>
                            </div>
                        </div>
                    </div>
                    <div className="resource">
                        <div className="resource_top">
                            <div className="resource_left">
                                <p className="resource_title">教师学习资源</p>
                                {
                                    <ZykcCard
                                        title={detailArr.resource.teacher.title}
                                        link={detailArr.resource.teacher.path}
                                        imgUrl={
                                            detailArr.resource.teacher.imgUrl
                                        }
                                        joinNum={
                                            detailArr.resource.teacher.joinNum
                                        }
                                        comment={
                                            detailArr.resource.teacher.comment
                                        }
                                        id={detailArr.resource.teacher.id}
                                        star={detailArr.resource.teacher.star}
                                        isHo={1}
                                        isRecommended={0}
                                        isLatest={0}
                                    />
                                }
                            </div>
                            <div className="resource_right">
                                <p className="resource_title">教师学习资源</p>
                                <div className="resource_rnavs">
                                    {detailArr.resource.student.studentList.list.map(
                                        (item, index) => {
                                            return (
                                                <a
                                                    className="resource_comm"
                                                    key={index}
                                                    href={item.path}
                                                >
                                                    <span className="resource_vid">
                                                        <img
                                                            src="./img/component/active/vid.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span className="resource_txt">
                                                        {item.title}
                                                    </span>
                                                </a>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="resource_bot">
                            <div className="Country">
                                <span className="r_botTxt">Country</span>
                                <span className="r_botNum">
                                    {detailArr.resource.number.country}
                                </span>
                            </div>
                            <div className="Teacher">
                                <span className="r_botTxt">Teacher</span>
                                <span className="r_botNum">
                                    {detailArr.resource.number.teacher}
                                </span>
                            </div>
                            <div className="Students">
                                <span className="r_botTxt">Students</span>
                                <span className="r_botNum">
                                    {detailArr.resource.number.students}
                                </span>
                            </div>
                            <div className="Teams">
                                <span className="r_botTxt">Teams</span>
                                <span className="r_botNum">
                                    {detailArr.resource.number.teams}
                                </span>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}

            {/* <div className="detailContent">
                <h1>teacher</h1>
                {detailArr.resource && (
                    <Fragment>
                        <h2>{detailArr.resource.teacher.title}</h2>
                        <h2>{detailArr.resource.teacher.path}</h2>
                        <h2>{detailArr.resource.teacher.tag}</h2>
                        <h2>{detailArr.resource.teacher.imgUrl}</h2>
                        <h2>{detailArr.resource.teacher.joinNum}</h2>
                        <h2>{detailArr.resource.teacher.star}</h2>
                        <h2>{detailArr.resource.teacher.comment}</h2>
                        <h2>{detailArr.resource.teacher.id}</h2>
                        <hr />
                    </Fragment>
                )}
                <br />
            </div>
            <div className="detailContent">
                <h1>student</h1>
                {detailArr.resource && (
                    <Fragment>
                        <h2>{detailArr.resource.student.title}</h2>
                        <ul>
                            {detailArr.resource.student.studentList.list.map(
                                (item, index) => {
                                    return (
                                        <li key={index}>
                                            {item.id}
                                            {item.title}
                                            {item.path}
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                        <hr />
                    </Fragment>
                )}
                <br />
            </div> */}
            {/* <div className="voteList">
                {voteArr.title &&
                    voteArr.voteList.map((item, index) => {
                        return <Vote {...item} key={index} />;
                    })}
            </div> */}
            <div class="hdxq_shows">
                <div class="shows_bar">
                    <p class="shows_title">{voteArr.title && voteArr.title}</p>
                    <div class="shows_btn">
                        {/* <input
                            type="text"
                            name="showsBtn"
                            id="showsBtn"
                            class="showsBtn"
                            value=""
                            placeholder="输入作品编号"
                        />
                        <span class="goBtn">GO</span> */}
                        <Search
                            placeholder="请输入搜索内容"
                            onSearch={searchKeyWord}
                            enterButton
                            className="searchIpt"
                        />
                    </div>
                </div>
                <div class="shows_nav">
                    {voteArr.title &&
                        voteArr.voteList.map((item, index) => {
                            return <Vote {...item} key={index} />;
                        })}
                </div>
            </div>
            <Pagination current={6} total={50} className="pagination" />
        </div>
    );
});

export default Detail;
