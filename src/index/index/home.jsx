/* eslint-disable no-new */
import React, { memo, useState, useEffect, Fragment } from "react";
import Slider from "./slider";
import Xnkjg from "./xnkjg";
import Zxkc from "./zykc";
import Kxhdal from "./kxhdal";
import Kjzy from "./kjzy";
import Zthd from "./zthd";
import { Skeleton } from "antd";
import { axiosPost } from "./../../utils/axios";
import cookie from "react-cookies";

import "./../mock";
import "./index.less";
const HomeWrap = memo(() => {
    const [homeArr, setHomeArr] = useState({});
    const [language, setLanguage] = useState("zh_CN");
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setLanguage("en");
        } else {
            setLanguage("zh_CN");
        }
        axiosPost(window.baseUrl + "/api/index").then(res => {
            setHomeArr(res);
        });
    }, []);
    return (
        <div className="home_wrap">
            {homeArr.slide ? (
                <Fragment>
                    <div className="sliderWrap">
                        <Slider sliderData={homeArr.slide} />
                    </div>
                    <Xnkjg xnkjgData={homeArr.xnkjg} language={language} />
                    <div className="zxkcBox">
                        <Zxkc zxkcData={homeArr.zykc} language={language} />
                    </div>
                    <Kxhdal kxhdalData={homeArr.kxhdal} language={language} />
                    <Kjzy kjztData={homeArr.kjzy} language={language} />
                    {/* <Zthd zthdData={homeArr.zthd} /> */}
                </Fragment>
            ) : (
                <Skeleton active />
            )}
        </div>
    );
});

export default HomeWrap;
