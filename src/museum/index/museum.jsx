import React, { memo, useState, useEffect, Fragment } from "react";
import axios from "axios";

import "./index.less";
import "./../mock/indexMock";
import CommList from "./commList";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Breadcrumb } from "antd";
import Title from "./../../component/commonTitle";
import KxhdalCard from "./../../component/kxhdalCard";
import { axiosGet } from "./../../utils/axios";
import cookie from "react-cookies";

const Museum = memo(() => {
    const [indexArr, setIndexArr] = useState({});
    const [titleArr, setTitleArr] = useState({
        breadCrumb: ["首页", "虚拟科技馆"],
        listTitle: ["虚拟科技馆", "最新展项", "科学活动"],
    });
    const [language, setLanguage] = useState("zh_CN");
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setLanguage("en");
            setTitleArr({
                breadCrumb: ["Home", "Virtual Science Museum"],
                listTitle: [
                    "Virtual Science Museum",
                    "dot kown",
                    "Online Exhibits",
                ],
            });
        }
        axiosGet(window.baseUrl + "/api/xnkjg?uid=" + cookie.load("uuid")).then(
            res => {
                setIndexArr(res);
            }
        );
    }, []);

    return (
        <div className="museunm_wrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">{titleArr.breadCrumb[0]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/museum.html">{titleArr.breadCrumb[1]}</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {indexArr.xnkjg && (
                <Fragment>
                    <CommList
                        title={titleArr.listTitle[0]}
                        icon="museum/icon1.png"
                        link="/museum.html#/xncg"
                        listArr={indexArr.xnkjg}
                        language={language}
                        type={2}
                        uid={cookie.load("uuid")}
                    />
                    {/* <CommList
                        title="最新展评"
                        icon="museum/icon2.png"
                        link="www.baidu.com"
                        listArr={indexArr.zxzp.splice(0, 3)}
                    /> */}
                    {/* <CommList
                        title={titleArr.listTitle[1]}
                        icon="museum/icon3.png"
                        link="/museum.html#/zxkjzx"
                        listArr={indexArr.zxzx}
                        language={language}
                        type={3}
                    /> */}
                    <div className="kxhdalWrap">
                        <Title
                            imgUrl="museum/icon3.png"
                            title={titleArr.listTitle[2]}
                            moreLink="/museum.html#/kxhd"
                            language={language}
                        />
                        <div className="hdalContent">
                            {indexArr.kxhdal.map(item => {
                                return <KxhdalCard {...item} key={item.id} />;
                            })}
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    );
});

export default Museum;
