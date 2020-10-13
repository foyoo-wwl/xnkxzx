/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, {
    memo,
    useState,
    useEffect,
    useCallback,
    Fragment,
    useRef,
} from "react";

import { Breadcrumb, Pagination, Skeleton, Empty } from "antd";
import "./index.less";
import "./../mock/zxkjMenu";
import { axiosGet, axiosPost } from "./../../utils/axios";
import CommList from "./../comp/commList";
import cookie from "react-cookies";

const Zxkjzx = memo(() => {
    const [kxhdArr, setKxhdArr] = useState({});
    const [listArr, setListArr] = useState([]);
    const [menuIndexs, setMenuIndexs] = useState({
        continentIndex: 0,
        contryIndex: 0,
        gradeIndex: 0,
        subjectIndex: 0,
    });
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "虚拟科技馆", "在线科技展项"],
        menu: ["州别", "国家", "学科"],
    });
    const [language, setLanguage] = useState("zh_CN");
    const [initArr, setInitArr] = useState({});
    const [selectId, setSelectId] = useState({
        continentId: 0,
        countryId: 0,
        gradeId: 0,
        subjectId: 0,
    });
    const [pageArr, setPageArr] = useState({
        page: 1,
        totalPage: 0,
        pageSize: 1,
    });
    const [loadFlag, setLoadFlat] = useState(false);
    const getList = useCallback(
        (_selectId, page) => {
            setLoadFlat(false);
            axiosPost(window.baseUrl + "/api/xnkjg?type=1&page=" + page, {
                type: 1,
                continentId: _selectId.continentId,
                countryId: _selectId.countryId,
                gradeId: _selectId.gradeId,
                subjectId: _selectId.subjectId,
            }).then(res => {
                setListArr(res.list);
                setPageArr({
                    page: res.page,
                    totalPage: res.totalPage,
                    pageSize: 1,
                });
                setLoadFlat(true);
            });
        },
        [selectId]
    );

    // 修改州id
    const changeContinentIndex = (index, id) => {
        const _continentArr = { ...initArr }.continent;
        const _kxhdArr = { ...kxhdArr };
        const _selectId = { ...selectId };
        const _menuIndexs = { ...menuIndexs };
        _selectId.continentId = id;
        _selectId.countryId = _continentArr[index].list[0].countryId;
        _continentArr.map(item => {
            item.list.map((li, liIndex) => {
                if (liIndex > 0) {
                    li.isSelectd = 0;
                } else {
                    li.isSelectd = 1;
                }
            });
        });
        _continentArr[0].isSelectd = 0;
        _continentArr[_menuIndexs.continentIndex].isSelectd = 0;
        _continentArr[index].isSelectd = 1;
        _kxhdArr.continent = _continentArr;
        _menuIndexs.continentIndex = index;
        _menuIndexs.countryIndex = 0;

        setKxhdArr(_kxhdArr);
        setSelectId(_selectId);
        setMenuIndexs(_menuIndexs);
        getList(_selectId, 1);
    };
    // 修改国家Id
    const changeCountryIndex = (index, id) => {
        const _menuIndexs = { ...menuIndexs };
        const _kxhdMenu = { ...kxhdArr };
        const _selectId = { ...selectId };

        _selectId.countryId = id;

        _kxhdMenu.continent[_menuIndexs.continentIndex].list[0].isSelectd = 0;
        _kxhdMenu.continent[_menuIndexs.continentIndex].list[
            _menuIndexs.contryIndex
        ].isSelectd = 0;
        _kxhdMenu.continent[_menuIndexs.continentIndex].list[
            index
        ].isSelectd = 1;

        _menuIndexs.contryIndex = index;

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
            _selectId.continentId = _res.continent[0].continentId;
            _selectId.countryId = _res.continent[0].list[0].countryId;
            _selectId.gradeId = _res.grade[0].id;
            _selectId.subjectd = _res.subject[0].id;
            _res.continent.map((item, index) => {
                if (index > 0) {
                    item.isSelectd = 0;
                } else {
                    item.isSelectd = 1;
                }
                item.list.map((li, liIndex) => {
                    if (liIndex > 0) {
                        li.isSelectd = 0;
                    } else {
                        li.isSelectd = 1;
                    }
                });
            });
            _res.subject.map((item, index) => {
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
    // 中英文初始化
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setLanguage("en");
            setTitleArr({
                breadCrumb: [
                    "Home",
                    "Virtual Science Museum",
                    "Online Exhibits",
                ],
                menu: ["Area", "Country", "Subject"],
            });
        }
    }, []);
    const onShowSizeChange = current => {
        getList(selectId, current);
    };
    return (
        <div className="zxkjzx_wrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">{titleArr.breadCrumb[0]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/museum.html">{titleArr.breadCrumb[1]}</a>
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
                                {kxhdArr.continent.map((item, index) => {
                                    return (
                                        <span
                                            key={item.continentId + "=" + index}
                                            className={
                                                item.isSelectd ? "active" : ""
                                            }
                                            onClick={() =>
                                                changeContinentIndex(
                                                    index,
                                                    item.continentId
                                                )
                                            }
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
                                {kxhdArr.continent[
                                    menuIndexs.continentIndex
                                ].list.map((item, index) => {
                                    return (
                                        <span
                                            key={item.countryId + "=" + index}
                                            className={
                                                item.isSelectd ? "active" : ""
                                            }
                                            onClick={() =>
                                                changeCountryIndex(
                                                    index,
                                                    item.countryId
                                                )
                                            }
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
                                {kxhdArr.subject.map((item, index) => {
                                    return (
                                        <span
                                            key={item.id + "=" + index}
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
                            <CommList ListArr={listArr} type={3} />
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

export default Zxkjzx;
