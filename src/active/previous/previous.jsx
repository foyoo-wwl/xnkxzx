/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback } from "react";
import axios from "axios";

import "../mock/listmock";
import "../mock/yearmock";
import CommList from "./../comp/list";
import "./index.less";
import { Breadcrumb } from "antd";

const Previous = memo(() => {
    const [activeArr, setActiveArr] = useState([]);
    const [yearArr, setYearArr] = useState([]);
    const getList = id => {
        axios
            .get("/active/list")
            .then(res => {
                setActiveArr(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    useEffect(() => {
        axios
            .get("/active/previous/menu")
            .then(res => {
                setYearArr(res.data.data);
                getList();
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const chageTab = useCallback((index, tab) => {
        const _activeArr = [...activeArr];
        _activeArr[index].tab = tab;
        setActiveArr(_activeArr);
    });
    const changeYearIndex = index => {
        console.log(index);
        const _yearArr = [...yearArr];
        _yearArr.map(item => {
            item.isSelected = 0;
        });
        _yearArr[index].isSelected = 1;
        setYearArr(_yearArr);
        getList();
    };
    return (
        <div className="indexWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">首页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/active.html">主题活动</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>往期专题</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {yearArr.length && (
                <div className="zthd_year">
                    {yearArr.map((item, index) => {
                        return (
                            <div
                                key={item.id + "=" + index}
                                onClick={() => changeYearIndex(index, item.id)}
                                className={item.isSelected ? "y1" : "y2"}
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="previousWrap">
                {activeArr.length > 0 && (
                    <CommList ListArr={activeArr} chageTab={chageTab} />
                )}
            </div>
        </div>
    );
});

export default Previous;
