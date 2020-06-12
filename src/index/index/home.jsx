/* eslint-disable no-new */
import React, { memo, useState, useEffect, Fragment } from "react";
import Mock from "mockjs";
import axios from "axios";
import Slider from "./slider";
import Xnkjg from "./xnkjg";
import Zxkc from "./zykc";
import Kxhdal from "./kxhdal";
import Kjzy from "./kjzy";
import Zthd from "./zthd";

import { axiosPost } from "./../../utils/axios";

import "./../mock";
import "./index.less";

const HomeWrap = memo(() => {
    const [homeArr, setHomeArr] = useState({});
    useEffect(() => {
        axios
            .get("/api")
            .then(res => {
                setHomeArr(res.data.data);
                console.log(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        axiosPost().then(res => {
            console.log(res);
        });
    }, []);
    return (
        <div className="home_wrap">
            {homeArr.slider && (
                <Fragment>
                    <div className="sliderWrap">
                        <Slider sliderData={homeArr.slider} />
                    </div>
                    <Xnkjg xnkjgData={homeArr.xnkjg} />
                    <div className="zxkcBox">
                        <Zxkc zxkcData={homeArr.zykc} />
                    </div>
                    <Kxhdal kxhdalData={homeArr.kxhdal} />
                    <Kjzy kjztData={homeArr.kjzy} />
                    <Zthd zthdData={homeArr.zthd} />
                </Fragment>
            )}
        </div>
    );
});

export default HomeWrap;
