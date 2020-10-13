import React, { useState, memo, useEffect, Fragment, useCallback } from "react";
import { Breadcrumb, Pagination, Skeleton, Empty } from "antd";
import Slider from "./../index/index/slider";
import Zxkc from "./../index/index/zykc";
import { axiosGet, axiosPost } from "./../utils/axios";
import CommList from "./../component/kxhdList";
import Title from "./../component/commonTitle";
import cookie from "react-cookies";
const Course = memo(() => {
    const [homeArr, setHomeArr] = useState({});
    const [listArr, setListArr] = useState([]);
    const [pageArr, setPageArr] = useState({
        page: 0,
        totalPage: 0,
        pageSize: 10,
    });
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "专业课程"],
        title: ["在线培训", "科教资源"],
    });
    const [loadFlag, setLoadFlat] = useState(false);
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setTitleArr({
                breadCrumb: [
                    "Home",
                    "Professional Learning",
                    "Teaching Resources",
                ],
                menu: ["Type", "Grade", "Subject"],
                title: ["Professional Learning", "Teaching Resources"],
            });
        }
        axiosPost(window.baseUrl + "/api/index").then(res => {
            setHomeArr(res);
        });
        axiosGet(
            window.baseUrl +
                "/api/coursesource?typeId=0&gradeId=0&subjectId=0&page=1"
        ).then(res => {
            setListArr(res.list);
            setPageArr({
                page: res.page,
                totalPage: res.totalPage,
                pageSize: 2,
            });
            setLoadFlat(true);
        });
    }, []);
    const onShowSizeChange = (current, size) => {
        axiosGet(
            window.baseUrl +
                "/api/coursesource?typeId=0&gradeId=0&subjectId=0&page=" +
                current
        ).then(res => {
            setListArr(res.list);
            setLoadFlat(true);
        });
    };
    return (
        <div className="home_wrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">{titleArr.breadCrumb[0]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{titleArr.breadCrumb[1]}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {homeArr.slide ? (
                <Fragment>
                    <div className="sliderWrap">
                        <Slider sliderData={homeArr.slide} />
                    </div>
                    <div className="zxkcBox">
                        <Zxkc zxkcData={homeArr.zykc} />
                    </div>
                </Fragment>
            ) : (
                <Skeleton active />
            )}
            <div className="listWrap">
                <Title
                    imgUrl={"zykc/zykc_logo.png"}
                    title={titleArr.title[1]}
                    moreLink="./kjzy.html"
                />
                {loadFlag ? (
                    <Fragment>
                        {listArr.length > 0 ? (
                            <CommList ListArr={listArr} />
                        ) : (
                            <Empty />
                        )}
                    </Fragment>
                ) : (
                    <Skeleton active />
                )}
            </div>
            {pageArr.totalPage > 1 && (
                <Pagination
                    defaultCurrent={pageArr.page}
                    total={pageArr.totalPage * pageArr.pageSize}
                    pageSize={pageArr.pageSize}
                    className="pagination"
                    onChange={onShowSizeChange}
                />
            )}
        </div>
    );
});

export default Course;
