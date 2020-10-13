import React, { useState, memo, useEffect, Fragment } from "react";
import {
    Breadcrumb,
    Pagination,
    Skeleton,
    Empty,
    Modal,
    Checkbox,
    Button,
    message,
} from "antd";
import "./index.less";
import getQueryVariable from "./../utils/getQueryUrl";
import { axiosPost, axiosGet } from "./../utils/axios";
import cookie from "react-cookies";
import CommList from "./../component/kxhdList";
const KjzyList = memo(() => {
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "专业课程", "科教资源"],
    });
    const [listArr, setListArr] = useState({});
    const [loadFlag, setLoadFlat] = useState(false);
    useEffect(() => {
        axiosPost(window.baseUrl + "/api/coursesource", {
            typeId: getQueryVariable("typeid"),
            parentId: getQueryVariable("parentid"),
        }).then(res => {
            setListArr(res);
            setLoadFlat(true);
        });
        const en = {
            breadCrumb: ["Home", "Professional Learning", "Teaching Resources"],
        };
        // cookie.save("_locale", "en");
        if (cookie.load("_locale") === "en") {
            setTitleArr(en);
        }

        axiosGet(
            window.baseUrl +
                "/api/myaction?type=5" +
                "&objectId=" +
                getQueryVariable("parentid") +
                "&userId=" +
                cookie.load("uuid")
        ).then(res => {});
    }, []);

    return (
        <div className="KjzyListWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">{titleArr.breadCrumb[0]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/museum.html">{titleArr.breadCrumb[1]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/kjzy.html">{titleArr.breadCrumb[2]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {listArr.title && listArr.title}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="top">
                <div className="title">{listArr.title}</div>
                <div className="excerpt">{listArr.excerpt}</div>
                <div
                    className="body"
                    dangerouslySetInnerHTML={{
                        __html: listArr.body,
                    }}
                ></div>
            </div>
            <div className="listWrap">
                {loadFlag ? (
                    <Fragment>
                        {listArr.list.length > 0 ? (
                            <CommList ListArr={listArr.list} link={1} />
                        ) : (
                            <Empty />
                        )}
                    </Fragment>
                ) : (
                    <Skeleton active />
                )}
            </div>
        </div>
    );
});
export default KjzyList;
