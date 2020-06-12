/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback, Fragment } from "react";
import axios from "axios";

import { Pagination } from "antd";
import Vote from "./../comp/vote";

import "./index.less";

import "../mock/activeDetailMock";
import "../mock/voteMock";
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
    return (
        <div className="indexWrap">
            <div className="activeWrap">
                <div className="detailContent">
                    <h1>banner</h1>
                    {detailArr.banner && (
                        <Fragment>
                            <h2>{detailArr.banner.imgUrl}</h2>
                            <h2>{detailArr.banner.state}</h2>
                            <h2>{detailArr.banner.time}</h2>
                            <h2>{detailArr.banner.bannerTitle}</h2>
                            <h2>{detailArr.banner.abstract}</h2>
                            <h2>{detailArr.banner.path}</h2>
                            <hr />
                        </Fragment>
                    )}
                    <br />
                </div>
                <div className="detailContent">
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
                </div>
                <div className="detailContent">
                    <h1>number</h1>
                    {detailArr.resource && (
                        <Fragment>
                            <h2>country{detailArr.resource.number.country}</h2>
                            <h2>teacher{detailArr.resource.number.teacher}</h2>
                            <h2>
                                students{detailArr.resource.number.students}
                            </h2>
                            <h2>teams{detailArr.resource.number.teams}</h2>
                            <hr />
                        </Fragment>
                    )}
                    <br />
                </div>
            </div>

            <div className="voteWrap">
                <h1>{voteArr.title && voteArr.title}</h1>
            </div>
            <div className="voteList">
                {voteArr.title &&
                    voteArr.voteList.map((item, index) => {
                        return <Vote {...item} key={index} />;
                    })}
            </div>
            <Pagination current={6} total={50} />
        </div>
    );
});

export default Detail;
