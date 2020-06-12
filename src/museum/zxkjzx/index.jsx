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

import axios from "axios";
import { Breadcrumb, Pagination } from "antd";
import "./index.less";
import "./../mock/zxkjMenu";
import { axiosGet } from "./../../utils/axios";
import CommList from "./../comp/commList";

const Zxkjzx = memo(() => {
    const [kxhdArr, setKxhdArr] = useState({});
    const [listArr, setListArr] = useState([]);
    const [menuIndexs, setMenuIndexs] = useState({
        continentIndex: 0,
        contryIndex: 0,
        gradeIndex: 0,
        subjectIndex: 0,
    });
    const [initArr, setInitArr] = useState({});
    const [selectId, setSelectId] = useState({
        continentId: 0,
        contryId: 0,
        gradeId: 0,
        subjectId: 0,
    });

    const getList = useCallback(() => {
        axios
            .get("/museum/xncg/list")
            .then(res => {
                setListArr(res.data.data.xncg);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // 修改州id
    const changeContinentIndex = (index, id) => {
        console.log(initArr);
        const _continentArr = { ...JSON.parse(JSON.stringify(initArr)) }
            .continent;
        const _kxhdArr = { ...kxhdArr };
        const _selectId = { ...selectId };
        const _menuIndexs = { ...menuIndexs };

        console.log(_continentArr);

        _selectId.continentId = id;
        _selectId.contryId = _continentArr[index].list[0].countryId;

        _continentArr[0].isSelectd = 0;
        _continentArr[_menuIndexs.continentIndex].isSelectd = 0;
        _continentArr[index].isSelectd = 1;
        _kxhdArr.continent = _continentArr;
        _menuIndexs.continentIndex = index;
        _menuIndexs.contryIndex = 0;

        setKxhdArr(_kxhdArr);
        setSelectId(_selectId);
        setMenuIndexs(_menuIndexs);
        getList();
    };
    // 修改国家Id
    const changeCountryIndex = (index, id) => {
        const _menuIndexs = { ...menuIndexs };
        const _kxhdMenu = { ...kxhdArr };
        const _selectId = { ...selectId };

        _selectId.contryId = id;

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
        getList();
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
        getList();
    };

    // 初始化目录列表
    useEffect(() => {
        axiosGet("http://virtsci.yanmeiculture.com/api/index").then(res => {
            const _selectId = { ...selectId };
            const _res = res;
            _selectId.continentId = _res.continent[0].continentId;
            _selectId.contryId = _res.continent[0].list[0].countryId;
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
            getList();
        });
    }, []);
    return (
        <div className="zxkjzx_wrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">首页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/museum.html">虚拟科技馆</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>在线科技展项</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="menuContent">
                {kxhdArr.continent && (
                    <Fragment>
                        <div className="sort_comm">
                            <div class="sort_title">州别：</div>
                            <div class="sort_category">
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
                            <div class="sort_title">国家：</div>
                            <div class="sort_category">
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
                            <div class="sort_title">学科：</div>
                            <div class="sort_category">
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
                )}
            </div>

            <div className="listWrap">
                {listArr && <CommList ListArr={listArr} />}
            </div>
            <Pagination defaultCurrent={1} total={50} className="pagination" />
        </div>
    );
});

export default Zxkjzx;
