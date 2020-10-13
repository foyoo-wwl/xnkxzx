/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback, Fragment } from "react";

import axios from "axios";
import "./index.less";
import "./../mock/kjzyMenu";
import CommList from "./../comp/list";
import EtzxList from "./../comp/etzxList";
import { Breadcrumb, Pagination, Skeleton, Empty } from "antd";
import { axiosGet, axiosPost } from "./../../utils/axios";
import cookie from "react-cookies";
const Etzx = memo(() => {
    const [etzxMenu, setEtzxMenu] = useState([]);
    const [listArr, setListArr] = useState([]);
    const [subjectIndex, setSubjectIndex] = useState(0);
    const [loadFlag, setLoadFlag] = useState(false);
    const [pageArr, setPageArr] = useState({
        page: 0,
        totalPage: 0,
        pageSize: 1,
    });
    const [subjectId, setSubjectId] = useState();
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "学生专区", "科教课程"],
    });
    const [menuList, setMenuList] = useState([]);
    const [language, setLanguage] = useState("zh_CN");
    useEffect(() => {
        let _cookie = null;
        const _listArr = [...listArr];
        const _menuList = [...menuList];
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
            setSubjectId(_subject[0].id);
            setEtzxMenu(_subject);
            // getList(_subject[0].id, 1);
            let _index = 0;
            _subject.map((item, index) => {
                if (index > 0) {
                    axiosPost(window.baseUrl + "/api/source?page=1", {
                        subjectId: item.id,
                    }).then(res2 => {
                        _index++;

                        if (res2.list.length > 0) {
                            const _list = res2.list;
                            // console.log(_list);
                            _listArr.push(_list);
                            // setListArr(_listArr);
                            _menuList.push(item.name);
                        }
                    });
                }
            });
            let t = setInterval(() => {
                if (_index + 2 > _subject.length) {
                    setListArr(_listArr);
                    clearInterval(t);
                    setMenuList(_menuList);
                }
            }, 100);
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
        },
        [etzxMenu, subjectIndex]
    );
    const getList = useCallback(
        (_selectId, page) => {
            setLoadFlag(false);
            axiosPost(window.baseUrl + "/api/source?page=" + page, {
                subjectId: _selectId,
            }).then(res => {
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
                breadCrumb: ["home", "For Students", "Science Course"],
                menu: ["Area", "Country"],
            });
        }
    }, []);
    const onShowSizeChange = (current, pageSize) => {
        getList(subjectId, current);
    };
    return (
        <div className="etzx_wrap">
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

            {/* <div className="menuContent">
                <div className="sort_comm">
                    <div className="sort_title">
                        {language === "en" ? "Subjects" : "学科："}
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
            )} */}

            <div className="newEtzx">
                <div className="title">
                    {/* <img src="./img/component/etzx/0banner.png" alt="" /> */}
                </div>
                {listArr.length &&
                    listArr.map((item, index) => {
                        return (
                            <EtzxList
                                title={menuList[index]}
                                ListArr={item}
                                key={index}
                            />
                        );
                    })}
                {/* <EtzxList title="思路漫游" ListArr={listArr} />
                <EtzxList title="思路漫游" ListArr={listArr} />
                <EtzxList title="思路漫游" ListArr={listArr} /> */}
            </div>
        </div>
    );
});
export default Etzx;
