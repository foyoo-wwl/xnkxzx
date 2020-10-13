import React, { useState, memo, useEffect } from "react";
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
import { axiosGet } from "./../utils/axios";
import cookie from "react-cookies";
const KjzyContent = memo(() => {
    const [contentArr, setContentArr] = useState({});
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "专业课程", "科教资源", "详情"],
        opearation: ["所有版权", "相关资源", "直接下载"],
    });
    const [modalFlag, setModalFlag] = useState(false);
    const [downLink, setDownLink] = useState("");
    const [checkFlag, setCheckFlag] = useState(false);
    useEffect(() => {
        axiosGet(
            window.baseUrl + "/api/coursesource/" + getQueryVariable("id")
        ).then(res => {
            console.log(res);
            setContentArr(res);
        });
    }, []);
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setTitleArr({
                breadCrumb: [
                    "Home",
                    "Professional Learning",
                    "Teaching Resources",
                    "Detail",
                ],
                opearation: [
                    "All rights reserved",
                    "Related resources",
                    "Download",
                ],
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
        <div className="KjzyContentWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">{titleArr.breadCrumb[0]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/course/v2/explore">
                            {titleArr.breadCrumb[1]}
                        </a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/kjzy.html">{titleArr.breadCrumb[2]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{titleArr.breadCrumb[3]}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {contentArr.title ? (
                <div className="content">
                    <div className="header">
                        <div className="headerImg">
                            <img src={contentArr.titleImg} alt="" />
                        </div>
                        <div className="headerTitle">
                            <div className="title">{contentArr.title}</div>
                            <div className="headerAbstract">
                                {contentArr.abstract}
                            </div>
                        </div>
                    </div>
                    <div className="copyrightWrap">
                        <div className="left">
                            <div className="title">
                                {titleArr.opearation[0]}
                            </div>
                            <div className="logo">
                                <img
                                    src={window.baseUrl + contentArr.copylogo}
                                    alt=""
                                />
                            </div>
                            <div className="botFont">
                                科技学堂{contentArr.copyname}
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <div className="top">
                                    {titleArr.opearation[1]}
                                </div>
                                <div className="name">
                                    {contentArr.filename}
                                </div>
                            </div>
                            <div
                                className="resource"
                                onClick={() => modalDown(contentArr.filepath)}
                            >
                                {titleArr.opearation[2]}
                            </div>
                        </div>
                    </div>
                    <div className="pics">
                        <div
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: contentArr.bottom,
                            }}
                        ></div>
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
                        {titleArr.opearation[2]}
                    </Button>
                </div>
            </Modal>
        </div>
    );
});
export default KjzyContent;
