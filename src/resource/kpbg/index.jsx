/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback } from "react";

import axios from "axios";
import "./index.less";
import "./../mock/kjzyMenu";
import CommList from "./../comp/list";
import { Breadcrumb, Pagination } from "antd";
const Kpbg = memo(() => {
    const [etzxMenu, setEtzxMenu] = useState([]);
    const [listArr, setListArr] = useState([]);
    const [subjectIndex, setSubjectIndex] = useState(0);
    useEffect(() => {
        axios
            .get("/resource/etzx/menu")
            .then(res => {
                const _res = res.data.data;
                _res.map((item, index) => {
                    if (index > 0) {
                        item.isSelectd = 0;
                    } else {
                        item.isSelectd = 1;
                    }
                });
                setEtzxMenu(_res);
                getList();
            })
            .catch(err => {});
    }, []);
    const changeSubjectIndex = useCallback(
        index => {
            const _etzxMenu = [...etzxMenu];
            _etzxMenu[subjectIndex].isSelectd = 0;
            _etzxMenu[index].isSelectd = 1;
            setSubjectIndex(index);
            setEtzxMenu(_etzxMenu);
            getList();
        },
        [etzxMenu, subjectIndex]
    );

    const getList = useCallback(id => {
        axios
            .get("/resource/etzx/list")
            .then(res => {
                setListArr(res.data.data);
                console.log(res.data.data);
            })
            .catch(err => {});
    }, []);

    return (
        <div className="kpbg_wrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">首页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/resource.html">科教资源</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>科普报告视频</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="menuContent">
                <div className="sort_comm">
                    <div className="sort_title">学科：</div>
                    <div className="sort_category">
                        {etzxMenu.length > 0 &&
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
                            })}
                    </div>
                </div>
            </div>

            {listArr.length > 0 && <CommList ListArr={listArr} />}
            <Pagination defaultCurrent={1} total={50} className="pagination" />
        </div>
    );
});
export default Kpbg;
