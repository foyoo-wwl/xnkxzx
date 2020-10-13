/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback, Fragment } from "react";

import axios from "axios";
import "./index.less";
import "./../mock/kjzyMenu";
import CommList from "./../comp/list";
import { Breadcrumb, Pagination, Skeleton, Empty } from "antd";
import { axiosGet, axiosPost } from "./../../utils/axios";
import cookie from "react-cookies";
import "./index.less";
const Kpbg = memo(() => {
    const [etzxMenu, setEtzxMenu] = useState([]);
    const [listArr, setListArr] = useState([]);
    const [subjectIndex, setSubjectIndex] = useState(0);
    const [loadFlag, setLoadFlag] = useState(false);
    const [pageArr, setPageArr] = useState({
        page: 0,
        totalPage: 0,
    });
    const [subjectId, setSubjectId] = useState();
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "学生专区", "科普报告"],
    });
    const [language, setLanguage] = useState("zh_CN");
    useEffect(() => {
        let _cookie = null;
        if (cookie.load("_locale")) {
            _cookie = cookie.load("_locale");
        } else {
            _cookie = "zh_CN";
        }

        axiosGet(window.baseUrl + "/api/index?local=" + _cookie).then(res => {
            const _subject = res.subject;
            _subject.map((item, index) => {
                if (index === 0) {
                    item.isSelectd = 1;
                } else {
                    item.isSelectd = 0;
                }
            });
            setEtzxMenu(_subject);
            getList(_subject[0].id, 1);
            setPageArr({
                page: res.page,
                totalPage: res.totalPage,
            });
        });
    }, []);
    const changeSubjectIndex = useCallback(
        (index, id) => {
            const _etzxMenu = [...etzxMenu];
            _etzxMenu[subjectIndex].isSelectd = 0;
            _etzxMenu[index].isSelectd = 1;
            setSubjectIndex(index);
            setEtzxMenu(_etzxMenu);
            getList(id, 1);
            setSubjectId(id);
        },
        [etzxMenu, subjectIndex]
    );
    const getList = useCallback(
        (_selectId, page) => {
            setLoadFlag(false);
            axiosGet(
                window.baseUrl +
                    "/api/source?subjectId=" +
                    _selectId +
                    "&page=" +
                    page,
                {
                    subjectId: _selectId,
                }
            ).then(res => {
                setListArr(res.list);
                setLoadFlag(true);
                setPageArr({
                    page: res.page,
                    totalPage: res.totalPage,
                    pageSize: 1,
                });
            });
        },
        [loadFlag]
    );
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setLanguage("en");
            setTitleArr({
                breadCrumb: ["home", "For Students", "Video Lecture"],
                menu: ["Area", "Country"],
            });
        }
    }, []);
    const onShowSizeChange = current => {
        getList(subjectId, current);
    };
    return (
        <div className="kpbg_wrap">
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

            <div className="menuContent">
                <div className="sort_comm">
                    <div className="sort_title">
                        {language === "en" ? "Subjects" : "学科"}：
                    </div>
                    <div className="sort_category">
                        {etzxMenu.length > 0 ? (
                            etzxMenu.map((item, index) => {
                                return (
                                    <span
                                        key={item.id + "=" + index}
                                        className={
                                            item.isSelectd ? "active" : ""
                                        }
                                        onClick={() =>
                                            changeSubjectIndex(index, item.id)
                                        }
                                    >
                                        {item.name}
                                    </span>
                                );
                            })
                        ) : (
                            <Skeleton active />
                        )}
                    </div>
                </div>
            </div>

            <div className="listWrap">
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
                    total={pageArr.totalPage}
                    pageSize={pageArr.pageSize}
                    className="pagination"
                    onChange={onShowSizeChange}
                />
            )}
        </div>
    );
});
export default Kpbg;
