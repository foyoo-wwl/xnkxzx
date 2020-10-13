import React, { memo, useState, useEffect, Fragment } from "react";

import "./index.less";
import { axiosPost, axiosGet } from "./../utils/axios";
import { Skeleton } from "antd";
import getQueryVariable from "./../utils/getQueryUrl";
import SimpleArticle from "./simpleArticle";
import Content from "./content";
import axios from "axios";
import cookie from "react-cookies";
import "./listArticleMock";
const Article = memo(props => {
    const [articleArr, setArticleArr] = useState({});
    const [listArticleArr, setListArticleArr] = useState([]);
    const [timeS, setTimeS] = useState(true);
    useEffect(() => {
        if (parseInt(getQueryVariable("type"), 0) === 5) {
            axiosPost(window.baseUrl + "/api/article", {
                id: getQueryVariable("id"),
                seriesType: 2,
                uid: cookie.load("uuid"),
            }).then(res => {
                setListArticleArr(res.lists);
                console.log(res);
            });
            // axios("/listArticle").then(res => {
            //     setListArticleArr(res.data.data.list);
            // });
        } else {
            axiosPost(window.baseUrl + "/api/article", {
                id: getQueryVariable("id"),
                seriesType: 1,
                uid: cookie.load("uuid"),
            }).then(res => {
                setArticleArr(res);
            });
        }
        axiosGet(
            window.baseUrl +
                "/api/myaction?type=" +
                getQueryVariable("type") +
                "&objectId=" +
                getQueryVariable("id") +
                "&userId=" +
                cookie.load("uuid")
        ).then(res => {});
    }, []);
    useEffect(() => {
        if (parseInt(getQueryVariable("time"), 0) === 0) {
            setTimeS(false);
        }
        setTimeout(() => {
            console.log(cookie.load("uuid"));
        }, 1000);
    }, []);
    return (
        <div className="articleWrap">
            {parseInt(getQueryVariable("type"), 0) === 5 && (
                <Fragment>
                    {listArticleArr.length ? (
                        <Content listarr={listArticleArr} />
                    ) : (
                        <Skeleton active />
                    )}
                </Fragment>
            )}
            {parseInt(getQueryVariable("type"), 0) === 1 && (
                <Fragment>
                    {articleArr.id ? (
                        <SimpleArticle
                            {...articleArr}
                            timeFlag={timeS}
                            type={getQueryVariable("action")}
                            userId={cookie.load("uuid")}
                            objectId={getQueryVariable("id")}
                        />
                    ) : (
                        <Skeleton active />
                    )}
                </Fragment>
            )}
            {/* <Content listarr={listArticleArr} /> */}
        </div>
    );
});
export default Article;
