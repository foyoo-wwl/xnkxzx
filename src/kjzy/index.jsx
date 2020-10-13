/* eslint-disable no-underscore-dangle */
import React, { useState, memo, useEffect, Fragment, useCallback } from "react";
import axios from "axios";
import { Breadcrumb, Pagination, Skeleton, Empty } from "antd";
import "./index.less";
import { axiosGet, axiosPost } from "./../utils/axios";
import cookie from "react-cookies";
import CommList from "./../component/kxhdList";

const Kjzy = memo(() => {
    const [kxhdArr, setKxhdArr] = useState({});
    const [listArr, setListArr] = useState([]);
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "专业课程", "科教资源"],
        menu: ["类型", "分类", "学科"],
    });
    const [selectId, setSelectId] = useState({
        typeId: 0,
        gradeId: 0,
        subjectId: 0,
    });
    const [menuIndexs, setMenuIndexs] = useState({
        typeIndex: 0,
        gradeIndex: 0,
        subjectIndex: 0,
    });
    const [pageArr, setPageArr] = useState({
        page: 0,
        totalPage: 0,
        pageSize: 2,
    });
    const [loadFlag, setLoadFlat] = useState(false);
    const [initArr, setInitArr] = useState({});
    // 初始化目录列表
    useEffect(() => {
        let _cookie = null;
        if (cookie.load("_locale")) {
            _cookie = cookie.load("_locale");
        } else {
            _cookie = "zh_CN";
        }

        axiosGet(window.baseUrl + "/api/index?local=" + _cookie).then(res => {
            const _selectId = { ...selectId };
            const _res = res;
            _selectId.typeId = _res.courseSource[0].id;
            _selectId.gradeId = _res.grade[0].id;
            _selectId.subjectd = _res.subject[0].id;
            _res.subject.map((item, index) => {
                if (index > 0) {
                    item.isSelectd = 0;
                } else {
                    item.isSelectd = 1;
                }
            });
            _res.courseSource.map((item, index) => {
                if (index > 0) {
                    item.isSelectd = 0;
                } else {
                    item.isSelectd = 1;
                }
            });
            _res.grade.map((item, index) => {
                if (index > 0) {
                    item.isSelectd = 0;
                } else {
                    item.isSelectd = 1;
                }
            });
            setSelectId(_selectId);
            setInitArr(_res);
            setKxhdArr(_res);
            getList(_selectId, 1);
        });
    }, []);
    const getList = useCallback(
        (_selectId, page) => {
            setLoadFlat(false);
            axiosGet(
                window.baseUrl +
                    `/api/coursesource?typeId=${_selectId.typeId}&gradeId=${_selectId.gradeId}&subjectId=${_selectId.subjectId}&page=${page}`
            ).then(res => {
                setListArr(res.list);
                setPageArr({
                    page: res.page,
                    totalPage: res.totalPage,
                    pageSize: 2,
                });
                setLoadFlat(true);
            });
        },
        [selectId, loadFlag]
    );
    // 修改greade id
    const changeCourseIndex = (index, id) => {
        const _menuIndexs = { ...menuIndexs };
        const _kxhdMenu = { ...kxhdArr };
        const _selectId = { ...selectId };

        _selectId.typeId = id;

        _kxhdMenu.courseSource[0].isSelectd = 0;
        _kxhdMenu.courseSource[_menuIndexs.typeIndex].isSelectd = 0;
        _kxhdMenu.courseSource[index].isSelectd = 1;

        _menuIndexs.typeIndex = index;

        setKxhdArr(_kxhdMenu);
        setSelectId(_selectId);
        setMenuIndexs(_menuIndexs);
        getList(_selectId, 1);
    };
    // 修改greade id
    const changeGradeIndex = (index, id) => {
        const _menuIndexs = { ...menuIndexs };
        const _kxhdMenu = { ...kxhdArr };
        const _selectId = { ...selectId };

        _selectId.gradeId = id;

        _kxhdMenu.grade[0].isSelectd = 0;
        _kxhdMenu.grade[_menuIndexs.gradeIndex].isSelectd = 0;
        _kxhdMenu.grade[index].isSelectd = 1;

        _menuIndexs.gradeIndex = index;

        setKxhdArr(_kxhdMenu);
        setSelectId(_selectId);
        setMenuIndexs(_menuIndexs);
        getList(_selectId, 1);
    };
    // 修改subject
    const changeSubjectIndex = (index, id) => {
        const _menuIndexs = { ...menuIndexs };
        const _kxhdMenu = { ...kxhdArr };
        const _selectId = { ...selectId };

        _selectId.subjectId = id;

        _kxhdMenu.subject[0].isSelectd = 0;
        _kxhdMenu.subject[_menuIndexs.subjectIndex].isSelectd = 0;
        _kxhdMenu.subject[index].isSelectd = 1;

        _menuIndexs.subjectIndex = index;
        setKxhdArr(_kxhdMenu);
        setSelectId(_selectId);
        setMenuIndexs(_menuIndexs);
        getList(_selectId, 1);
    };
    // 中英文初始化
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setTitleArr({
                breadCrumb: [
                    "Home",
                    "Professional Learning",
                    "Teaching Resources",
                ],
                menu: ["Type", "Category", "Subject"],
            });
        }
    }, []);
    const onShowSizeChange = current => {
        getList(selectId, current);
    };
    return (
        <div className="kjzyWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">{titleArr.breadCrumb[0]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/course.html">{titleArr.breadCrumb[1]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{titleArr.breadCrumb[2]}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="menuContent">
                {kxhdArr.continent ? (
                    <Fragment>
                        <div className="sort_comm">
                            <div className="sort_title">
                                {titleArr.menu[0]}：
                            </div>
                            <div className="sort_category">
                                {initArr.courseSource.map((item, index) => {
                                    return (
                                        <span
                                            key={item.continentId + "=" + index}
                                            className={
                                                item.isSelectd ? "active" : ""
                                            }
                                            onClick={() => {
                                                changeCourseIndex(
                                                    index,
                                                    item.id
                                                );
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="sort_comm">
                            <div className="sort_title">
                                {titleArr.menu[1]}：
                            </div>
                            <div className="sort_category">
                                {initArr.grade.map((item, index) => {
                                    return (
                                        <span
                                            key={item.continentId + "=" + index}
                                            className={
                                                item.isSelectd ? "active" : ""
                                            }
                                            onClick={() => {
                                                changeGradeIndex(
                                                    index,
                                                    item.id
                                                );
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="sort_comm">
                            <div className="sort_title">
                                {titleArr.menu[2]}：
                            </div>
                            <div className="sort_category">
                                {initArr.subject.map((item, index) => {
                                    return (
                                        <span
                                            key={item.continentId + "=" + index}
                                            className={
                                                item.isSelectd ? "active" : ""
                                            }
                                            onClick={() =>
                                                changeSubjectIndex(
                                                    index,
                                                    item.id
                                                )
                                            }
                                        >
                                            {item.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <Skeleton active />
                )}
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
                    total={pageArr.totalPage * pageArr.pageSize}
                    pageSize={pageArr.pageSize}
                    className="pagination"
                    onChange={onShowSizeChange}
                />
            )}
        </div>
    );
});
export default Kjzy;
