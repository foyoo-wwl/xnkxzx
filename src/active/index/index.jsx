/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../mock/listmock";
import { Breadcrumb } from "antd";

import CommList from "./../comp/list";
import cookie from "react-cookies";
const Index = memo(() => {
    const [activeArr, setActiveArr] = useState([]);
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "虚拟科技馆", "虚拟场馆"],
        menu: ["州别", "国家"],
    });
    const [language, setLanguage] = useState("zh_CN");
    useEffect(() => {
        axios
            .get("/active/list")
            .then(res => {
                setActiveArr(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setLanguage("en");
            setTitleArr({
                breadCrumb: ["home", "Virtual Science Museum", "Virtual Tour"],
                menu: ["Area", "Country"],
            });
        }
    }, []);
    const chageTab = useCallback((index, tab) => {
        const _activeArr = [...activeArr];
        _activeArr[index].tab = tab;
        setActiveArr(_activeArr);
    });
    return (
        <div className="indexWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">首页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>主题活动</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="activeWrap">
                {activeArr.length > 0 && (
                    <CommList ListArr={activeArr} chageTab={chageTab} />
                )}
            </div>
        </div>
    );
});

export default Index;
