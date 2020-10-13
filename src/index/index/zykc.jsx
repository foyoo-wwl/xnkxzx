/**
 * 资源课程组件
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";

import ZykcCard from "./../../component/zykcCard";
import Title from "./../../component/commonTitle";
import cookie from "react-cookies";
import "./index.less";
const Zxkc = memo(props => {
    const { zxkcData, language } = props;
    const [title, setTitle] = useState();
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setTitle("Professional Learning");
        } else {
            setTitle(zxkcData.title);
        }
    }, []);
    return (
        <div className="zxkcWrap">
            {/* <div className="xnkjgTitle">
                {zxkcData.title}===={zxkcData.moreLink}
            </div> */}
            <Title
                imgUrl={"zykc/zykc_logo.png"}
                title={title}
                moreLink="/course/v2/explore"
                language={language}
            />
            <div className="xnkjg_list">
                {zxkcData.list.map(item => {
                    return <ZykcCard {...item} key={item.id} />;
                })}
            </div>
        </div>
    );
});

export default Zxkc;
